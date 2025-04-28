import { createContext, useContext } from 'react';
import { ProductsPageStore } from '@/store/ProductsPageStore';

export const ProductsPageStoreContext = createContext<ProductsPageStore | null>(
    null,
);

const useProductsPageStore = (): ProductsPageStore => {
    const store = useContext(ProductsPageStoreContext);
    if (!store)
        throw new Error(
            'useProductsPageStore must be used inside its provider',
        );
    return store;
};

export default useProductsPageStore;
