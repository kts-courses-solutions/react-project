import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from '@/pages/Layout';
import { Products } from '@/pages/products';
import { Product } from '@/pages/product';
import { Categories } from '@/pages/Categories';
import { About } from '@/pages/About';

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
                path: '/Categories',
            },
            {
                element: <About />,
                path: '/About',
            },
        ],
    },
];
