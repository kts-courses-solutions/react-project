import { Text } from '@/components/ui/Text';
import s from './Headline.module.scss';

interface HeadlineProps {
    title: string;
    subtitle: string;
}

const Headline = ({ title, subtitle }: HeadlineProps) => {
    return (
        <div className={s.headline}>
            <Text tag="h1" weight="bold" className={s.headline__title}>
                {title}
            </Text>
            <Text tag="p" weight="normal" className={s.headline__subtitle}>
                {subtitle}
            </Text>
        </div>
    );
};

export default Headline;
