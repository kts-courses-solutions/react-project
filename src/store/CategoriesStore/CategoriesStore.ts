import { runInAction } from 'mobx';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';
import { RootStore } from '@/store/RootStore';
import { CategoryType } from '@/types/categories';

export default class CategoriesStore extends DataStore<null | CategoryType[]> {
    private readonly rootStore: RootStore;

    constructor(rootStore: RootStore) {
        super(null);
        this.rootStore = rootStore;
    }

    async load() {
        this.setMeta(Meta.loading);
        try {
            const response =
                await this.rootStore.apiClient.get<CategoryType[]>(
                    `/categories/`,
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
