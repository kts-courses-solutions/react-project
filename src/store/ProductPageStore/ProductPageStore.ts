import { runInAction } from 'mobx';
import { ProductType } from '@/types/products';
import { apiClient } from '@/config';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';

export default class ProductPageStore extends DataStore<null | ProductType> {
    // private readonly rootStore: RootStore;

    constructor() {
        super(null);

        // this.rootStore = rootStore;
    }

    async load(productId: number) {
        this.setMeta(Meta.loading);
        try {
            const response = await apiClient.get<ProductType>(
                `/products/${productId}`,
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

    destroy() {}
}
