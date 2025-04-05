import { createContext, useContext } from 'react';
import { ProductsPageStore } from '@/store/ProductsPage/ProductsPageStore.ts';

export const ProductsPageStoreContext = createContext<ProductsPageStore | null>(
    null,
);

export const useProductsPageStore = (): ProductsPageStore => {
    const store = useContext(ProductsPageStoreContext);
    if (!store)
        throw new Error(
            'useProductsPageStore must be used inside its provider',
        );
    return store;
};
