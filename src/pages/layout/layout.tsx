import { Header } from '@/pages/layout';
import { Outlet } from 'react-router-dom';
import { layoutStyles } from '@/pages/layout';
import { globalStyles } from '@/styles';

const Layout = () => {
    return (
        <div className={globalStyles.layout}>
            <Header />
            <main className={layoutStyles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
