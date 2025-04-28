import React from 'react';
import { useLocalStore } from '@/store/LocalStore';
import { ProductPageStore } from '@/store/ProductPageStore';
import { ProductPageStoreContext } from './ProductPageStoreContext';
import { useRootStore } from '@/store/RootStore';

export const ProductsPageStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const rootStore = useRootStore();
    const store = useLocalStore(() => new ProductPageStore(rootStore));

    return (
        <ProductPageStoreContext.Provider value={store}>
            {children}
        </ProductPageStoreContext.Provider>
    );
};

export default ProductsPageStoreProvider;
