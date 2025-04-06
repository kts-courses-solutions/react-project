import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from '@/pages/Layout';
import { Products } from '@/pages/Products';
import { Product } from '@/pages/Product';
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
                path: '/Products',
            },
            {
                element: <Product />,
                path: '/Product/:productId',
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
