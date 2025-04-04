import { useEffect } from 'react';
import lalasiaStore from '@/store/lalasia.ts';

export function useGetProducts() {
    useEffect(() => {
        lalasiaStore.getProductsList({});
    }, []);

    return {
        isLoading:
            lalasiaStore.meta === 'initial' || lalasiaStore.meta === 'loading',
        products: lalasiaStore.list,
        error: lalasiaStore.error,
    };
}
