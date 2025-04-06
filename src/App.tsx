import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from '@/config';
import { RootStoreProvider } from '@/store/RootStore';

const router = createBrowserRouter(routesConfig);

const App = () => {
    return (
        <RootStoreProvider>
            <RouterProvider router={router} />
        </RootStoreProvider>
    );
};

export default App;
