import { IReactionDisposer, reaction, runInAction } from 'mobx';
import { ProductType } from '@/types/products';
import { getPagination, PaginationInfo } from '@/utils';
import { RootStore } from '@/store/RootStore';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';

interface LoadProps {
    title?: string;
    category?: string;
    price?: string;
    price_min?: string;
    price_max?: string;
}

export default class ProductsPageStore extends DataStore<ProductType[]> {
    private readonly rootStore: RootStore;
    private readonly _searchReaction: IReactionDisposer;

    constructor(rootStore: RootStore) {
        super([]);

        this.rootStore = rootStore;

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
                    title: title,
                    category: category,
                    price: price,
                    price_min: price_min,
                    price_max: price_max,
                });
            },
        );
    }

    get pagination(): PaginationInfo {
        const pageParam = this.rootStore.query.getParam('page');
        const pageNumber = pageParam ? Number(pageParam) : 1;
        return getPagination(this.data.length, 9, pageNumber, 5);
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
