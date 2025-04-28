import { createContext, useContext } from 'react';
import RootStore from '../RootStore.ts';

export const RootStoreContext = createContext<RootStore | null>(null);

const useRootStore = (): RootStore => {
    const store = useContext(RootStoreContext);
    if (!store)
        throw new Error('useRootStore must be used within RootStoreProvider');
    return store;
};

export default useRootStore;
