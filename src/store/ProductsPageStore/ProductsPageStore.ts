import {
    action,
    autorun,
    computed,
    IReactionDisposer,
    makeObservable,
    observable,
    reaction,
    runInAction,
} from 'mobx';
import { ProductType } from '@/types/products';
import { RootStore } from '@/store/RootStore';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';

interface LoadProps {
    title?: string;
    categoryId?: string;
    price?: string;
    price_min?: string;
    price_max?: string;
    offset?: string;
    limit?: string;
}

type PrivateFields = '_total';

class ProductsStoreWithTotal extends DataStore<ProductType[]> {
    protected _total: number | undefined;

    get total() {
        return this._total;
    }

    setTotal(total: number) {
        this._total = total;
    }
}

export default class ProductsPageStore extends ProductsStoreWithTotal {
    private readonly rootStore: RootStore;
    private readonly _searchReaction: IReactionDisposer;

    constructor(rootStore: RootStore) {
        super([]);

        this.rootStore = rootStore;

        makeObservable<ProductsStoreWithTotal, PrivateFields>(this, {
            _total: observable,
            total: computed,
            setTotal: action,
        });

        this._searchReaction = reaction(
            () => [
                this.rootStore.query.getParam('title'),
                this.rootStore.query.getParam('category'),
                this.rootStore.query.getParam('price'),
                this.rootStore.query.getParam('price_min'),
                this.rootStore.query.getParam('price_max'),
            ],
            ([title, category, price, price_min, price_max]) => {
                this.load({
                    offset: this.offset.toString(),
                    limit: this.limit.toString(),
                    price_min: price_min,
                    price_max: price_max,
                    price: price,
                    categoryId: category,
                    title: title,
                });
            },
        );

        autorun(() => {
            if (this.meta === Meta.initial) {
                this.load({
                    offset: ((this.currentPage - 1) * this.limit).toString(),
                    limit: this.limit.toString(),
                    title: this.rootStore.query.getParam('title'),
                    categoryId: this.rootStore.query.getParam('category'),
                    price: this.rootStore.query.getParam('price'),
                    price_min: this.rootStore.query.getParam('price_min'),
                    price_max: this.rootStore.query.getParam('price_max'),
                });

                this.rootStore.apiClient
                    .get<ProductType[]>('/products')
                    .then((r) => {
                        this.setTotal(r.data.length);
                    });
            }
        });
    }

    setTotal(total: number) {
        this._total = total;
    }

    get currentPage(): number {
        const pageParam = this.rootStore.query.getParam('page');
        return pageParam ? Number(pageParam) : 1;
    }

    get offset(): number {
        const offset = Number(this.rootStore.query.getParam('offset'));
        return !isNaN(offset) && offset >= 0 ? offset : 0;
    }

    get limit(): number {
        const limit = Number(this.rootStore.query.getParam('limit'));
        return !isNaN(limit) && limit > 0 ? limit : 9;
    }

    get hasMore(): boolean {
        return this.data.length === this.limit;
    }

    get total(): number | undefined {
        return this._total;
    }

    async load(params: LoadProps) {
        this.setMeta(Meta.loading);
        try {
            const response = await this.rootStore.apiClient.get<ProductType[]>(
                '/products',
                {
                    params: params,
                },
            );

            runInAction(() => {
                this.setData(response.data);
                this.setMeta(Meta.success);
            });
        } catch {
            runInAction(() => {
                this.setMeta(Meta.error);
            });
        }
    }

    destroy() {
        this._searchReaction?.();
    }
}
