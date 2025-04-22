import s from './User.module.scss';
import UsersStoreProvider from '@/store/UsersStore/context/UsersStoreProvider.tsx';
import useUsersStore from '@/store/UsersStore/context/UsersStoreContext.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContent = () => {
    const navigate = useNavigate();

    const store = useUsersStore();
    const user = store.load();

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }
    }, [user]);

    return (
        <div className={s['profile']}>
            <div className={s['profile__card']}>
                <div className={s['profile__avatar-section']}>
                    <img
                        className={s['profile__avatar']}
                        src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
                        alt="User avatar"
                    />
                    <div className={s['profile__info']}>
                        <h2 className={s['profile__name']}>{user}</h2>
                    </div>
                </div>

                <div className={s['profile__details']}>
                    <h3 className={s['profile__section-title']}>Информация</h3>
                    <ul className={s['profile__list']}>
                        <li className={s['profile__item']}>
                            <span className={s['profile__label']}>Роль:</span>
                            <span>Пользователь</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const User = () => {
    return (
        <UsersStoreProvider>
            <UserContent />
        </UsersStoreProvider>
    );
};

export default User;
