import { RouteObject } from 'react-router-dom';
import { Layout } from '@/pages/layout';
import { Categories } from '@/pages/categories';
import { About } from '@/pages/about';
import { Products } from '@/pages/products';

export const routesConfig: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                element: <Products />,
                path: '/products',
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
