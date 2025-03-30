import { Header } from '@/pages/layout';
import { Outlet } from 'react-router-dom';
import '@/styles/styles.module.scss';
import { globalStyles } from '@/styles';
import s from './layout.module.scss';

const Layout = () => {
    return (
        <div className={s.layout}>
            <Header />
            <main className={s.layout__content}>
                <div className={globalStyles.container}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
