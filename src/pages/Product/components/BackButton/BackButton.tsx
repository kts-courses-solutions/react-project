import s from '@/pages/Product/Product.module.scss';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@/components/ui/Icons/ArrowRightIcon';

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/products');
        }
    };

    return (
        <button onClick={handleClick} className={s.back}>
            <ArrowRightIcon />
            Back
        </button>
    );
};

export default BackButton;
