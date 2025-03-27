import { RouteObject } from 'react-router-dom';
import { Layout } from '@/pages/layout';
import { Root } from '@/pages/root';

export const routesConfig: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                element: <Root />,
                path: '/',
            },
        ],
    },
];
