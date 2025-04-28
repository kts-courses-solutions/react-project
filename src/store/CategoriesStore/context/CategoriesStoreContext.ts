import { createContext, useContext } from 'react';
import CategoriesStore from '@/store/CategoriesStore/CategoriesStore.ts';

export const CategoriesStoreContext = createContext<CategoriesStore | null>(
    null,
);

const useCategoriesStore = (): CategoriesStore => {
    const store = useContext(CategoriesStoreContext);
    if (!store)
        throw new Error('useCategoriesStore must be used inside its provider');
    return store;
};

export default useCategoriesStore;
