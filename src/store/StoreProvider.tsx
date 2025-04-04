import React from 'react';
import lalasiaStore from './lalasia';
import { StoreContext } from './useStores';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreContext.Provider value={{ lalasiaStore }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
