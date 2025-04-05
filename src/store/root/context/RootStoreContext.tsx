import { createContext, useContext } from 'react';
import RootStore from '../root.ts';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useRootStore = (): RootStore => {
    const store = useContext(RootStoreContext);
    if (!store)
        throw new Error('useRootStore must be used within RootStoreProvider');
    return store;
};
