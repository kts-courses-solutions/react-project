import React from 'react';
import { RootStoreContext } from './RootStoreContext.tsx';
import { useLocalStore } from '@/store/LocalStore';
import { RootStore } from '@/store/RootStore';

const RootStoreProvider = ({ children }: { children: React.ReactNode }) => {
    const rootStore = useLocalStore<RootStore>(() => new RootStore());

    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    );
};

export default RootStoreProvider;
