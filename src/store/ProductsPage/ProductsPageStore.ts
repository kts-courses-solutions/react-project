import { IReactionDisposer, reaction, runInAction } from 'mobx';
import RootStore from '@/store/root/root.ts';
import { BaseStore, Meta } from '@/store/base.ts';
import { Product } from '@/types/products';
import { apiClient } from '@/config';
import { getPagination, PaginationInfo } from '@/utils/pagination.ts';

export class ProductsPageStore extends BaseStore<Product> {
    private readonly rootStore: RootStore;
    private _searchReaction: IReactionDisposer;

    constructor(rootStore: RootStore) {
        super();

        this.rootStore = rootStore;

        this._searchReaction = reaction(
            () => this.rootStore.query,
            (title) => {
                console.log('a: ', title);
                this.load();
            },
        );
    }

    get pagination(): PaginationInfo | null {
        const pageParam = this.rootStore.query.getParam('page');
        const pageNumber = pageParam ? Number(pageParam) : 1;
        return getPagination(this.list.length, 9, pageNumber, 5);
    }

    async load() {
        this.setMeta(Meta.loading);
        try {
            const response = await apiClient.get<Product[]>('/products');

            runInAction(() => {
                this.setList(response.data);
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
