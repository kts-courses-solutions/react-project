import { action, makeObservable, observable } from 'mobx';

type PrivateFields = '_params';

export default class QueryParamsStore {
    private _params: URLSearchParams = new URLSearchParams();

    constructor() {
        makeObservable<QueryParamsStore, PrivateFields>(this, {
            _params: observable.ref,
            setSearch: action,
        });
    }

    getParam(key: string): string | null {
        return this._params.get(key);
    }

    setSearch(search: URLSearchParams) {
        this._params = search;
    }
}
