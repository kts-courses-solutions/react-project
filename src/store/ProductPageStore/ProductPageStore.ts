import { runInAction } from 'mobx';
import { ProductType, ProductWithRelatedType } from '@/types/products';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';
import { RootStore } from '@/store/RootStore';

export default class ProductPageStore extends DataStore<null | ProductWithRelatedType> {
    private readonly rootStore: RootStore;

    constructor(rootStore: RootStore) {
        super(null);
        this.rootStore = rootStore;
    }

    async load(productId: number) {
        this.setMeta(Meta.loading);
        try {
            const response1 = await this.rootStore.apiClient.get<ProductType>(
                `/products/${productId}`,
            );
            const response2 = await this.rootStore.apiClient.get<ProductType[]>(
                `/products/${productId}/related`,
            );

            runInAction(() => {
                this.setData({ ...response1.data, related: response2.data });
                this.setMeta(Meta.success);
            });
        } catch {
            runInAction(() => {
                this.setMeta(Meta.error);
            });
        }
    }

    destroy() {}
}
