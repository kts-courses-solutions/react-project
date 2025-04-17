import { Link } from 'react-router-dom';
import s from './UserControls.module.scss';
import { BagIcon } from '@/components/ui/Icons/BagIcon';
import { UserIcon } from '@/components/ui/Icons/UserIcon';

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
