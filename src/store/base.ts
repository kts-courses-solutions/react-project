import { action, computed, makeObservable, observable } from 'mobx';
import { ILocalStore } from '@/store/local.ts';
import { AxiosError } from 'axios';

export enum Meta {
    initial = 'initial',
    loading = 'loading',
    success = 'success',
    error = 'error',
}

type PrivateFields = '_list' | '_meta' | '_error';

export class BaseStore<T> implements ILocalStore {
    protected _list: T[] = [];
    protected _meta: Meta = Meta.initial;
    protected _error: AxiosError | null = null;

    constructor() {
        makeObservable<BaseStore<T>, PrivateFields>(this, {
            _list: observable.ref,
            _meta: observable,
            _error: observable,
            list: computed,
            meta: computed,
            error: computed,
            setList: action,
            setMeta: action,
            setError: action,
            reset: action,
        });
    }

    get list(): T[] {
        return this._list;
    }

    get meta(): Meta {
        return this._meta;
    }

    get error(): AxiosError | null {
        return this._error;
    }

    setList(data: T[]) {
        this._list = data;
    }

    setMeta(meta: Meta) {
        this._meta = meta;
    }

    setError(error: AxiosError) {
        this._error = error;
    }

    reset() {
        this._list = [];
        this._meta = Meta.initial;
    }

    destroy() {
        this.reset();
    }
}
