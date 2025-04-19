import s from './Content.module.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { Meta } from '@/store/DataStore/types.ts';
import { Text } from '@/components/ui/Text';
import { Loader } from '@/components/ui/Loader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const Content = observer(() => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNumber = page ? Number(page) : 1;

    const store = useProductsPageStore();

    const getContent = () => {
        const newData = [...store.data].slice(
            (pageNumber - 1) * 9,
            (pageNumber - 1) * 9 + 9,
        );
        if (store.sort === 'name')
            return newData.sort((a, b) => a.title.localeCompare(b.title));
        if (store.sort === 'price')
            return newData.sort(
                (a, b) => (a.price ? a.price : 0) - (b.price ? b.price : 0),
            );

        if (store.sort === 'no') return newData;
        return newData;
    };

    if (store.meta === Meta.initial || store.meta === Meta.loading) {
        console.log(store.meta);
        return <Loader />;
    }

    if (!store.data) return <Text>Oups...</Text>;

    return (
        <div className={s.productCards}>
            {getContent().map((product) => (
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
