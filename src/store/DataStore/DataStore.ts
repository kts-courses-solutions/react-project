import { action, computed, makeObservable, observable } from 'mobx';
import { AxiosError } from 'axios';
import { ILocalStore } from '@/store/LocalStore';
import { Meta } from './types';

type PrivateFields = '_data' | '_meta' | '_error';

export default class DataStore<T> implements ILocalStore {
    protected readonly _dataInitializer: T;
    protected _data: T;
    protected _meta: Meta = Meta.initial;
    protected _error: AxiosError | null = null;

    constructor(initializer: T) {
        makeObservable<DataStore<T>, PrivateFields>(this, {
            _data: observable.ref,
            _meta: observable,
            _error: observable,
            data: computed,
            meta: computed,
            error: computed,
            setData: action,
            setMeta: action,
            setError: action,
            reset: action,
        });

        this._data = initializer;
        this._dataInitializer = initializer;
    }

    get data(): T {
        return this._data;
    }

    get meta(): Meta {
        return this._meta;
    }

    get error(): AxiosError | null {
        return this._error;
    }

    setData(data: T) {
        this._data = data;
    }

    setMeta(meta: Meta) {
        this._meta = meta;
    }

    setError(error: AxiosError) {
        this._error = error;
    }

    reset() {
        this._data = this._dataInitializer;
        this._meta = Meta.initial;
    }

    destroy() {
        this.reset();
    }
}
