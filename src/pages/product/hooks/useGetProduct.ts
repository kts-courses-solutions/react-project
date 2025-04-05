import { apiClient } from '@/config';
import { AxiosError, AxiosResponse } from 'axios';
import { Product } from '@/types/products';
import { useEffect, useState } from 'react';

export function useGetProduct(productId: number) {
    const [product, setProduct] = useState<Product | null | undefined>(null);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        apiClient
            .get(`/products/${productId}`)
            .then((r: AxiosResponse<Product>) => setProduct(r.data))
            .catch((r: AxiosError) => {
                setProduct(undefined);
                setError(r);
            });
    }, [productId]);

    return {
        isLoading: product === null,
        product: product,
        error: error,
    };
}
