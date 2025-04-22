import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from '@/pages/Layout';
import { Products } from '@/pages/Products';
import { Product } from '@/pages/Product';
import { Categories } from '@/pages/Categories';
import { About } from '@/pages/About';
import { SuccessPayment } from '@/pages/SuccessPayment';
import { Login } from '@/pages/Login';
import { User } from '@/pages/User';

export const routesConfig: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/products" replace />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/user',
                element: <User />,
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
