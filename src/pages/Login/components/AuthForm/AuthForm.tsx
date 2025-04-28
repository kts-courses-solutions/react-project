import s from '@/pages/Login/Login.module.scss';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useState } from 'react';
import useUsersStore from '@/store/UsersStore/context/UsersStoreContext.ts';

interface AuthForm {
    mode: 'login' | 'register';
}

const AuthForm = ({ mode }: AuthForm) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const store = useUsersStore();

    const handleSubmit = () => {
        if (mode === 'register') {
            store.register(username, password);
            return;
        }

        store.authorize(username, password);
    };

    return (
        <form className={s.auth__form}>
            <Input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(v) => setUsername(v)}
            />

            <Input
                type="text"
                placeholder="Password"
                required
                value={password}
                onChange={(v) => setPassword(v)}
            />

            <Button type="submit" onClick={handleSubmit}>
                {mode === 'login' ? 'Sign In' : 'Register'}
            </Button>
        </form>
    );
};

export default AuthForm;
