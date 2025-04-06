import React from 'react';
import RootStore from '@/store/root/root';
import { RootStoreContext } from './RootStoreContext.tsx';
import { useLocalStore } from '@/store/local';

const RootStoreProvider = ({ children }: { children: React.ReactNode }) => {
    const rootStore = useLocalStore<RootStore>(() => new RootStore());

    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    );
};

export default RootStoreProvider;
