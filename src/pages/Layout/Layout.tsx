import { Header } from '@/pages/Layout';
import { Outlet } from 'react-router-dom';
import '@/styles/styles.module.scss';
import { globalStyles } from '@/styles';
import s from './Layout.module.scss';
import { useQueryParamsStoreInit } from '@/store/QueryParamsStore';
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer limit={1} />
        </div>
    );
};

export default Layout;
