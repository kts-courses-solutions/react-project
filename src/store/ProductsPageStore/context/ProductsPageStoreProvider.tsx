import { ProductsPageStoreContext } from './ProductsPageStoreContext.tsx';
import React from 'react';
import { useLocalStore } from '@/store/LocalStore';
import { useRootStore } from '@/store/RootStore';
import { ProductsPageStore } from '@/store/ProductsPageStore';

export const ProductsPageStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const rootStore = useRootStore();
    const store = useLocalStore(() => new ProductsPageStore(rootStore));

    return (
        <ProductsPageStoreContext.Provider value={store}>
            {children}
        </ProductsPageStoreContext.Provider>
    );
};

export default ProductsPageStoreProvider;
