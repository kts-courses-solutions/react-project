import { Header } from '@/pages/layout';
import { Outlet } from 'react-router-dom';
import { layoutStyles } from '@/pages/layout';
import '@/styles/styles.module.scss';
import { globalStyles } from '@/styles';

const Layout = () => {
    return (
        <div className={layoutStyles.wrapper}>
            <Header />
            <main className={layoutStyles.main}>
                <div className={globalStyles.container}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
