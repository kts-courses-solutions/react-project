import s from './Related.module.scss';
import { ProductWithRelatedType } from '@/types/products';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { PaymentDialog } from '@/components/shared/PaymentDialog';

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
                    <Card
                        key={item.id}
                        image={item.images[0]}
                        title={item.title}
                        subtitle={item.description}
                        contentSlot={`$${item.price}`}
                        actionSlot={
                            <PaymentDialog
                                price={item.price}
                                description={item.title}
                            />
                        }
                        link={`/product/${item.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Related;
