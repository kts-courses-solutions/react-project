import QueryParamsStore from '@/store/queryParams/queryParams.ts';

export default class RootStore {
    readonly query = new QueryParamsStore();
}
