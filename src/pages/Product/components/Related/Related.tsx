import s from './Related.module.scss';
import { ProductWithRelatedType } from '@/types/products';
import { Link } from 'react-router-dom';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface RelatedProps {
    product: ProductWithRelatedType;
}

const Related = ({ product }: RelatedProps) => {
    return (
        <div className={s.related}>
            <Text tag="h3" className={s.related__title}>
                Related items
            </Text>
            <div className={s.related__cards}>
                {product.related.slice(0, 3).map((item) => (
                    <Link
                        key={item.id}
                        to={`/product/${item.id}`}
                        className={s.related__cards__card}
                    >
                        <Card
                            key={item.id}
                            image={item.images[0]}
                            title={item.title}
                            subtitle={item.description}
                            contentSlot={`$${item.price}`}
                            actionSlot={
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert('Вы это купили! Поздравляю!');
                                    }}
                                >
                                    Buy now
                                </Button>
                            }
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Related;
