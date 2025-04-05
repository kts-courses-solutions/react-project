import { Link } from 'react-router-dom';
import clsx from 'clsx';
import globalStyles from '@/styles/styles.module.scss';
import Lalasia from '@/assets/Lalasia.svg';
import Navigation from './navigation/Navigation.tsx';
import s from './Header.module.scss';
import UserControls from './UserControls/UserControls.tsx';
import { memo } from 'react';

const Header = () => {
    return (
        <div className={s.header}>
            <header className={clsx(globalStyles.container, s.header__content)}>
                <Link to="/" className={s.header__logo}>
                    <img
                        src={`${import.meta.env.BASE_URL}logo.svg`}
                        alt="logo"
                    />
                    <img src={Lalasia} alt="logo" />
                </Link>

                <Navigation />

                <UserControls />
            </header>
        </div>
    );
};

export default memo(Header);
