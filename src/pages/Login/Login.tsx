import s from './Login.module.scss';
import { useEffect, useState } from 'react';
import { AuthForm } from './components/AuthForm';
import clsx from 'clsx';
import UsersStoreProvider from '@/store/UsersStore/context/UsersStoreProvider.tsx';
import useUsersStore from '@/store/UsersStore/context/UsersStoreContext.ts';
import { useNavigate } from 'react-router-dom';

const LoginContent = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState<'login' | 'register'>('login');

    const store = useUsersStore();
    const user = store.load();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    return (
        <div className={s.auth__page}>
            <div className={s.auth__card}>
                <div className={s.auth__tabs}>
                    <button
                        className={clsx(
                            s.auth__tab,
                            mode === 'login' && s.auth__tab_active,
                        )}
                        onClick={() => setMode('login')}
                    >
                        Sign in
                    </button>
                    <button
                        className={clsx(
                            s.auth__tab,
                            mode === 'register' && s.auth__tab_active,
                        )}
                        onClick={() => setMode('register')}
                    >
                        Register
                    </button>
                </div>
                <AuthForm mode={mode} />
            </div>
        </div>
    );
};

const Login = () => {
    return (
        <UsersStoreProvider>
            <LoginContent />
        </UsersStoreProvider>
    );
};

export default Login;
