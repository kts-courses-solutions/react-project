import { Text } from '@/components/Text';
import s from './headline.module.scss';

const Headline = () => {
    return (
        <div className={s.headline}>
            <Text tag="h1" weight="bold" className={s.headline__title}>
                Products
            </Text>
            <Text tag="p" weight="normal" className={s.headline__subtitle}>
                We display products based on the latest products we have, if you
                want to see our old products please enter the name of the item
            </Text>
        </div>
    );
};

export default Headline;
