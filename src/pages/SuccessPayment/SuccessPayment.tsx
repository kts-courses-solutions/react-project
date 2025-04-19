import s from './SuccessPayment.module.scss';
import { CheckIcon } from '@/components/ui/Icons/CheckIcon';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Text } from '@/components/ui/Text';

const SuccessPayment = () => {
    return (
        <div className={s.successPage}>
            <CheckIcon className={s.successPage__icon} />
            <Text tag="h1" className={s.successPage__title}>
                Платёж прошёл успешно!
            </Text>
            <Text tag="p" view="p-16" className={s.successPage__description}>
                Спасибо за покупку. Детали можно увидеть в личном кабинете.
            </Text>
            <Button asChild>
                <Link to="/" className={s.successPage__button}>
                    На главную
                </Link>
            </Button>
        </div>
    );
};

export default SuccessPayment;
