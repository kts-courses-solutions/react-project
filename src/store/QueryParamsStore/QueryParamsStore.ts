import { action, makeObservable, observable } from 'mobx';
import { nullToUndefined } from '@/utils';

type PrivateFields = '_params';

export default class QueryParamsStore {
    private _params: URLSearchParams = new URLSearchParams();

    constructor() {
        makeObservable<QueryParamsStore, PrivateFields>(this, {
            _params: observable.ref,
            setSearch: action,
        });
    }

    getParam(key: string): string | undefined {
        return nullToUndefined(this._params.get(key));
    }

    setSearch(search: URLSearchParams) {
        this._params = search;
    }
}
