import { Header } from '@/pages/layout';
import { Outlet } from 'react-router-dom';
import '@/styles/styles.module.scss';
import { globalStyles } from '@/styles';
import s from './layout.module.scss';
import StoreProvider from '@/store/StoreProvider.tsx';

const Layout = () => {
    return (
        <StoreProvider>
            <div className={s.layout}>
                <Header />
                <main className={s.layout__content}>
                    <div className={globalStyles.container}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </StoreProvider>
    );
};

export default Layout;
