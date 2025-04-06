import QueryParamsStore from '@/store/QueryParamsStore/QueryParamsStore.ts';

export default class RootStore {
    readonly query = new QueryParamsStore();

    destroy() {}
}
