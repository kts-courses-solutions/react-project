import { runInAction } from 'mobx';
import { ProductType } from '@/types/products';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';
import { RootStore } from '@/store/RootStore';

export default class ProductPageStore extends DataStore<null | ProductType> {
    private readonly rootStore: RootStore;

    constructor(rootStore: RootStore) {
        super(null);
        this.rootStore = rootStore;
    }

    async load(productId: number) {
        this.setMeta(Meta.loading);
        try {
            const response = await this.rootStore.apiClient.get<ProductType>(
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
