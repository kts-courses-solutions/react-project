import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import globalStyles from '@/styles/styles.module.scss';
import { headerStyles } from '@/pages/layout';

import Lalasia from '@/assets/Lalasia.svg';
import { UserIcon } from '@/components/Icons/UserIcon';
import { BagIcon } from '@/components/Icons/BagIcon';

const Header = () => {
    const location = useLocation();

    return (
        <div className={headerStyles.headerWrapper}>
            <header
                className={clsx(globalStyles.container, headerStyles.header)}
            >
                <Link to="/public" className={headerStyles.logo}>
                    <img
                        src={`${import.meta.env.BASE_URL}logo.svg`}
                        alt="logo"
                    />
                    <img src={Lalasia} alt="logo" />
                </Link>
                <nav>
                    <ul className={headerStyles.navbar}>
                        <li
                            className={clsx(
                                headerStyles.navbarElem,
                                location.pathname === '/products' &&
                                    headerStyles.navbarElemActive,
                            )}
                        >
                            <Link to="/products">Products</Link>
                            {location.pathname === '/products' && (
                                <div
                                    className={headerStyles.navbarActiveBorder}
                                />
                            )}
                        </li>
                        <li
                            className={clsx(
                                headerStyles.navbarElem,
                                location.pathname === '/categories' &&
                                    headerStyles.navbarElemActive,
                            )}
                        >
                            <Link to="/categories">Categories</Link>
                            {location.pathname === '/categories' && (
                                <div
                                    className={headerStyles.navbarActiveBorder}
                                />
                            )}
                        </li>
                        <li
                            className={clsx(
                                headerStyles.navbarElem,
                                location.pathname === '/about' &&
                                    headerStyles.navbarElemActive,
                            )}
                        >
                            <Link to="/about">About us</Link>
                            {location.pathname === '/about' && (
                                <div
                                    className={headerStyles.navbarActiveBorder}
                                />
                            )}
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className={headerStyles.navbarIcons}>
                        <li>
                            <Link to="/cart">
                                <BagIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <UserIcon />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
