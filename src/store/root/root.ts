import QueryParamsStore from '@/store/QueryParams/QueryParams.ts';

export default class RootStore {
    readonly query = new QueryParamsStore();
}
