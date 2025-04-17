import { Text } from '@/components/Text';
import s from './Headline.module.scss';

const Headline = () => {
    return (
        <div className={s.headline}>
            <Text tag="h1" weight="bold" className={s.headline__title}>
                Categories
            </Text>
            <Text tag="p" weight="normal" className={s.headline__subtitle}>
                We display categories based on the most popular ones.
            </Text>
        </div>
    );
};

export default Headline;
