import React from 'react';
import { useLocalStore } from '@/store/LocalStore';
import { useRootStore } from '@/store/RootStore';
import CategoriesStore from '@/store/CategoriesStore/CategoriesStore.ts';
import { CategoriesStoreContext } from '@/store/CategoriesStore/context/CategoriesStoreContext.ts';

export const CategoriesStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const rootStore = useRootStore();
    const store = useLocalStore(() => new CategoriesStore(rootStore));

    return (
        <CategoriesStoreContext.Provider value={store}>
            {children}
        </CategoriesStoreContext.Provider>
    );
};

export default CategoriesStoreProvider;
