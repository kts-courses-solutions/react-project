import { ProductsPageStore } from '@/store/ProductsPage/ProductsPageStore.ts';
import { useRootStore } from '@/store/root/context/RootStoreContext.tsx';
import { ProductsPageStoreContext } from './ProductsPageStoreContext.tsx';
import React, { useMemo } from 'react';

export const ProductsPageStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const rootStore = useRootStore();
    const store = useMemo(() => new ProductsPageStore(rootStore), [rootStore]);

    return (
        <ProductsPageStoreContext.Provider value={store}>
            {children}
        </ProductsPageStoreContext.Provider>
    );
};

export default ProductsPageStoreProvider;
