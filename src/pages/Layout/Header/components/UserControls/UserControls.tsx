import { Link } from 'react-router-dom';
import { BagIcon } from '@/components/Icons/BagIcon';
import { UserIcon } from '@/components/Icons/UserIcon';
import s from './UserControls.module.scss';

const UserControls = () => {
    return (
        <nav>
            <ul className={s.navbar__icon}>
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
    );
};

export default UserControls;
