import { apiClient } from '@/config';
import { AxiosError, AxiosResponse } from 'axios';
import { Product } from '@/types/products';
import { useEffect, useState } from 'react';

export function useGetProducts() {
    const [products, setProducts] = useState<Product[] | null | undefined>(
        null,
    );
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        apiClient
            .get('/products')
            .then((r: AxiosResponse<Product[]>) => setProducts(r.data))
            .catch((r: AxiosError) => {
                setProducts(undefined);
                setError(r);
            });
    }, []);

    return {
        isLoading: products === null,
        products: products,
        error: error,
    };
}
