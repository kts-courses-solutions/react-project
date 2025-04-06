import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import s from './Navigation.module.scss';
import { memo } from 'react';
import { NAV_LINKS } from './config';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav>
            <ul className={s.navbar}>
                {NAV_LINKS.map((item, i) => (
                    <li
                        key={i}
                        className={clsx(
                            s.navbar__elem,
                            location.pathname === item.pathname &&
                                s.navbar__elem_active,
                        )}
                    >
                        <Link to={item.pathname}>{item.title}</Link>
                        {location.pathname === item.pathname && (
                            <div className={s.navbar__border_active} />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(Navigation);
