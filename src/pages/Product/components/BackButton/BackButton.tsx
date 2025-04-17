import s from '@/pages/Product/Product.module.scss';
import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const BackButton = () => {
    const navigate = useNavigate();

    const handleCLick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        e.preventDefault();
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/products');
        }
    };

    return (
        <Link to="/products" onClick={handleCLick} className={s.back}>
            <ArrowRightIcon />
            Back
        </Link>
    );
};

export default BackButton;
