import React from 'react';
import RootStore from '@/store/root/root';
import { RootStoreContext } from '@/store/root/context/RootStoreContext.tsx';

const RootStoreProvider = ({ children }: { children: React.ReactNode }) => {
    const rootStore = new RootStore();

    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    );
};

export default RootStoreProvider;
