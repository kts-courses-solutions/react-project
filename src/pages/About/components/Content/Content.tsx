import { Text } from '@/components/ui/Text';
import s from './Content.module.scss';

const Content = () => {
    return (
        <ul className={s.list}>
            <li className={s.list__elem}>
                <Text tag="p" className={s.list__elem__content}>
                    🏢 Who We Are — A team of passionate creators delivering
                    high-quality products with care and precision.
                </Text>
            </li>
            <li className={s.list__elem}>
                <Text tag="p" className={s.list__elem__content}>
                    🎯 Our Mission — To make discovering and buying unique items
                    easy, enjoyable, and inspiring.
                </Text>
            </li>
            <li className={s.list__elem}>
                <Text tag="p" className={s.list__elem__content}>
                    🌍 What We Offer — A curated selection of products across
                    multiple categories, from the latest trends to timeless
                    classics.
                </Text>
            </li>
            <li className={s.list__elem}>
                <Text tag="p" className={s.list__elem__content}>
                    🤝 Our Values — Quality, transparency, customer-first
                    mindset, and sustainable practices.
                </Text>
            </li>
            <li className={s.list__elem}>
                <Text tag="p" className={s.list__elem__content}>
                    📦 How We Work — We collaborate with trusted suppliers and
                    constantly update our catalog to bring you the best.
                </Text>
            </li>
            <li className={s.list__elem}>
                <Text tag="p" className={s.list__elem__content}>
                    📬 Get in Touch — Have questions, suggestions, or feedback?
                    We're always happy to hear from you!
                </Text>
            </li>
        </ul>
    );
};

export default Content;
