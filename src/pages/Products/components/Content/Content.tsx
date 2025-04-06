import s from './Content.module.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Meta } from '@/store/base.ts';
import { Loader } from '@/components/Loader';
import { Text } from '@/components/Text';
import { useProductsPageStore } from '@/store/ProductsPageStore';

const Content = observer(() => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNumber = page ? Number(page) : 1;

    const store = useProductsPageStore();

    useEffect(() => {
        store.load();
    }, [store]);

    if (store.meta === Meta.initial || store.meta === Meta.loading) {
        return <Loader />;
    }

    if (!store.list) return <Text>Oups...</Text>;

    return (
        <div className={s.productCards}>
            {store.list
                .slice((pageNumber - 1) * 9, (pageNumber - 1) * 9 + 9)
                .map((product) => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className={s.productCards__card}
                    >
                        <Card
                            key={product.id}
                            image={product.images[0]}
                            title={product.title}
                            subtitle={product.description}
                            contentSlot={`$${product.price}`}
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
    );
});

export default Content;
