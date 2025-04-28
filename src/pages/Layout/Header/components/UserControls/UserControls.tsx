import { Link } from 'react-router-dom';
import s from './UserControls.module.scss';
import { UserIcon } from '@/components/ui/Icons/UserIcon';

const UserControls = () => {
    return (
        <nav>
            <ul className={s.navbar__icon}>
                <li>
                    <Link to="/user">
                        <UserIcon />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default UserControls;
