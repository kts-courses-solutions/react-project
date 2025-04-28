import QueryParamsStore from '@/store/QueryParamsStore/QueryParamsStore';
import axios from 'axios';
import { YOOMONEY_BACKEND_URL } from '@/config/yoomoney';
import { SHOP_BACKEND_URL } from '@/config/api';

export default class RootStore {
    readonly query = new QueryParamsStore();
    readonly apiClient = axios.create({
        baseURL: SHOP_BACKEND_URL,
    });
    readonly paymentApiClient = axios.create({
        baseURL: YOOMONEY_BACKEND_URL,
    });

    destroy() {}
}
