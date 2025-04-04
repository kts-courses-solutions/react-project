import { Product } from '@/types/products';
import { apiClient } from '@/config';
import { BaseStore, Meta } from '@/store/base.ts';
import { runInAction } from 'mobx';
import { AxiosError } from 'axios';

interface GetProductsListParams {
    title?: string;
    price?: number;
    price_min?: number;
    price_max?: number;
    categoryId?: number;
}

export class LalasiaStore extends BaseStore<Product> {
    private readonly _apiStore = apiClient;

    constructor() {
        super();
    }

    async getProductsList(params: GetProductsListParams): Promise<void> {
        this.setMeta(Meta.loading);
        this.setList([]);

        try {
            const query = Object.entries(params)
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .filter(([_, value]) => value !== undefined)
                .map(
                    ([key, value]) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
                )
                .join('&');

            const response = await this._apiStore.get<Product[]>(
                `/products${query ? '?' + query : ''}`,
            );

            runInAction(() => {
                this.setList(response.data);
                this.setMeta(Meta.success);
            });
        } catch (e) {
            console.error('Ошибка загрузки продуктов:', e);

            runInAction(() => {
                this.setMeta(Meta.error);

                if (e instanceof Error) {
                    const axiosError = e as AxiosError;
                    if (axiosError.response) {
                        this.setError(axiosError);
                    }
                }
            });
        }
    }
}

const lalasiaStore = new LalasiaStore();
export default lalasiaStore;
