import { Header } from '@/pages/layout';
import { Outlet } from 'react-router-dom';
import '@/styles/styles.module.scss';
import { globalStyles } from '@/styles';
import s from './layout.module.scss';
import { useQueryParamsStoreInit } from '@/store/QueryParams/useQueryParamsStoreInit.ts';

const Layout = () => {
    useQueryParamsStoreInit();
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
