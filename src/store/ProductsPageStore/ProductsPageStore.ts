import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction,
} from 'mobx';
import { ProductType } from '@/types/products';
import { RootStore } from '@/store/RootStore';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';
import { toast } from 'react-toastify';
import getPagination from '../../utils/pagination.ts';

interface LoadProps {
    title?: string;
    categoryId?: string;
    price?: string;
    price_min?: string;
    price_max?: string;
    offset?: string;
    limit?: string;
}

type PrivateFields = '_total' | '_sort';

class ProductsStoreWithTotal extends DataStore<ProductType[]> {
    protected _total: number | undefined;
    protected _sort: string | undefined;

    get total() {
        return this._total;
    }

    setTotal(total: number | undefined) {
        this._total = total;
    }

    get sort() {
        return this._sort;
    }

    setSort(total: string) {
        this._sort = total;
    }
}

export default class ProductsPageStore extends ProductsStoreWithTotal {
    private readonly rootStore: RootStore;
    private notify = () =>
        toast.error('There was a problem in getting products...');

    constructor(rootStore: RootStore) {
        super([]);

        this.rootStore = rootStore;

        makeObservable<ProductsStoreWithTotal, PrivateFields>(this, {
            _total: observable,
            _sort: observable,
            total: computed,
            sort: computed,
            setTotal: action,
            setSort: action,
        });
    }

    setTotal(total: number | undefined) {
        this._total = total;
    }

    get offset(): number {
        const offset = Number(this.rootStore.query.getParam('offset'));
        return !isNaN(offset) && offset >= 0 ? offset : 0;
    }

    get limit(): number {
        const limit = Number(this.rootStore.query.getParam('limit'));
        return !isNaN(limit) && limit > 0 ? limit : 9;
    }

    get total(): number | undefined {
        return this._total;
    }

    get pagination() {
        if (this.total) {
            return getPagination(this.total, this.offset, this.limit, 5);
        }
    }

    async load(params: LoadProps) {
        runInAction(() => {
            this.setMeta(Meta.loading);
            this.setTotal(undefined);
        });
        this.rootStore.apiClient
            .get<ProductType[]>('/products', {
                params: params,
            })
            .then((response) => {
                runInAction(() => {
                    this.setData(response.data);
                    this.setMeta(Meta.success);
                });
            })
            .catch(() => {
                runInAction(() => {
                    this.setMeta(Meta.error);
                    this.notify();
                });
            });
        const newParams = { ...params };
        delete newParams['limit'];
        delete newParams['offset'];

        this.rootStore.apiClient
            .get<ProductType[]>('/products', {
                params: newParams,
            })
            .then((r) => {
                runInAction(() => {
                    this.setTotal(r.data.length);
                });
            });
    }

    destroy() {}
}
