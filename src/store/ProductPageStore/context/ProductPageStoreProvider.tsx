import React from 'react';
import { useLocalStore } from '@/store/LocalStore';
import { ProductPageStore } from '@/store/ProductPageStore';
import { ProductPageStoreContext } from './ProductPageStoreContext';

export const ProductsPageStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const store = useLocalStore(() => new ProductPageStore());

    return (
        <ProductPageStoreContext.Provider value={store}>
            {children}
        </ProductPageStoreContext.Provider>
    );
};

export default ProductsPageStoreProvider;
