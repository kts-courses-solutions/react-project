import { IReactionDisposer, reaction, runInAction } from 'mobx';
import { ProductType } from '@/types/products';
import { getPagination, PaginationInfo } from '@/utils/pagination.ts';
import { RootStore } from '@/store/RootStore';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';

export default class ProductsPageStore extends DataStore<ProductType[]> {
    private readonly rootStore: RootStore;
    private readonly _searchReaction: IReactionDisposer;

    constructor(rootStore: RootStore) {
        super([]);

        this.rootStore = rootStore;

        this._searchReaction = reaction(
            () => [
                this.rootStore.query.getParam('page'),
                this.rootStore.query.getParam('search'),
                this.rootStore.query.getParam('category'),
            ],
            ([page, search, category]) => {
                console.log(
                    'page: ',
                    page,
                    'search: ',
                    search,
                    'category: ',
                    category,
                );
                this.load();
            },
        );
    }

    get pagination(): PaginationInfo {
        const pageParam = this.rootStore.query.getParam('page');
        const pageNumber = pageParam ? Number(pageParam) : 1;
        return getPagination(this.data.length, 9, pageNumber, 5);
    }

    async load() {
        this.setMeta(Meta.loading);
        try {
            const response =
                await this.rootStore.apiClient.get<ProductType[]>('/products');

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
