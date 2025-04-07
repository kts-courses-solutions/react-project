import { IReactionDisposer, reaction, runInAction } from 'mobx';
import { ProductType } from '@/types/products';
import { RootStore } from '@/store/RootStore';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';

interface LoadProps {
    title?: string;
    category?: string;
    price?: string;
    price_min?: string;
    price_max?: string;
    offset?: string;
    limit?: string;
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
                    offset: this.offset.toString(),
                    limit: this.limit.toString(),
                    category: category,
                    price: price,
                    price_min: price_min,
                    price_max: price_max,
                    title: title,
                });
            },
        );
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
