import { runInAction } from 'mobx';
import { DataStore } from '@/store/DataStore';
import { Meta } from '@/store/DataStore/types.ts';
import { RootStore } from '@/store/RootStore';
import { CategoryType } from '@/types/categories';
import { toast } from 'react-toastify';

export default class CategoriesStore extends DataStore<null | CategoryType[]> {
    private readonly rootStore: RootStore;
    private notify = () =>
        toast.error('There was a problem in getting categories...');

    constructor(rootStore: RootStore) {
        super(null);
        this.rootStore = rootStore;
    }

    async load() {
        this.setMeta(Meta.loading);
        this.rootStore.apiClient
            .get<CategoryType[]>(`/categories/`)
            .then((response) => {
                runInAction(() => {
                    this.setData(response.data);
                    this.setMeta(Meta.success);
                });
            })
            .catch(() => {
                runInAction(() => {
                    this.setMeta(Meta.error);
                });
                this.notify();
            });
    }

    destroy() {}
}
