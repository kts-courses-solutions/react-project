import QueryParamsStore from '@/store/QueryParamsStore/QueryParamsStore.ts';
import axios from 'axios';

export default class RootStore {
    readonly query = new QueryParamsStore();
    readonly apiClient = axios.create({
        baseURL: 'https://api.escuelajs.co/api/v1/',
    });

    destroy() {}
}
