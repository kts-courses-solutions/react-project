import { Link } from 'react-router-dom';
import globalStyles from '@/styles/styles.module.scss';

const Header = () => {
    return (
        <header className={globalStyles.container}>
            <nav>
                <ul>
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
        </header>
    );
};

export default Header;
