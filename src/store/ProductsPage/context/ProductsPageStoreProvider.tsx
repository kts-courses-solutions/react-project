import { ProductsPageStore } from '@/store/ProductsPage/ProductsPageStore.ts';
import { useRootStore } from '@/store/root/context/RootStoreContext.tsx';
import { ProductsPageStoreContext } from './ProductsPageStoreContext.tsx';
import React from 'react';
import { useLocalStore } from '@/store/local';

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
