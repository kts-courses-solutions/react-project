import { Link } from 'react-router-dom';
import globalStyles from '@/styles/styles.module.scss';
import { headerStyles } from '@/pages/layout';
import clsx from 'clsx';

const Header = () => {
    return (
        <header className={clsx(globalStyles.container, headerStyles.header)}>
            <div className={headerStyles.logo}>
                <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="logo" />
                <span>Lalasia</span>
            </div>
            <nav>
                <ul className={headerStyles.navbar}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className={headerStyles.navbarIcons}>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
