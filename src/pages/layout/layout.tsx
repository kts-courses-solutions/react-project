import { Header } from '@/pages/layout';
import { Outlet } from 'react-router-dom';
import { layoutStyles } from '@/pages/layout';
import '@/styles/styles.module.scss';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className={layoutStyles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
