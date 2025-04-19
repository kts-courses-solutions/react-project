import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from '@/pages/Layout';
import { Products } from '@/pages/Products';
import { Product } from '@/pages/Product';
import { Categories } from '@/pages/Categories';
import { About } from '@/pages/About';
import { SuccessPayment } from '@/pages/SuccessPayment';

export const routesConfig: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/products" replace />,
            },
            {
                element: <Products />,
                path: '/products',
            },
            {
                element: <Product />,
                path: '/product/:productId',
            },
            {
                element: <Categories />,
                path: '/categories',
            },
            {
                element: <About />,
                path: '/about',
            },
            {
                element: <SuccessPayment />,
                path: '/success',
            },
        ],
    },
];
