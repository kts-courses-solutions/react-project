import { RouteObject } from 'react-router-dom';
import { Layout } from '@/pages/layout';
import { Categories } from '@/pages/categories';
import { About } from '@/pages/about';
import { Products } from '@/pages/products';
import { Product } from '@/pages/product';

export const routesConfig: RouteObject[] = [
    {
        element: <Layout />,
        children: [
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
        ],
    },
];
