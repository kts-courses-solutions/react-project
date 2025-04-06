import { createContext, useContext } from 'react';
import { ProductPageStore } from '@/store/ProductPageStore';

export const ProductPageStoreContext = createContext<ProductPageStore | null>(
    null,
);

const useProductPageStore = (): ProductPageStore => {
    const store = useContext(ProductPageStoreContext);
    if (!store)
        throw new Error(
            'useProductsPageStore must be used inside its provider',
        );
    return store;
};

export default useProductPageStore;
