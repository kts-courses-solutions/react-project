import { Header } from '@/pages/layout';
import { Outlet } from 'react-router-dom';
import { layoutStyles } from '@/pages/layout';

const Layout = () => {
    return (
        <>
            <Header />
            <main className={layoutStyles.main}>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
