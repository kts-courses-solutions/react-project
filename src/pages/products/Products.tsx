import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Link, useSearchParams } from 'react-router-dom';
import { Loader } from '@/components/Loader';
import s from './Products.module.scss';
import { useEffect } from 'react';
import Pagination from '@/pages/products/components/Pagination/Pagination.tsx';
import Headline from './components/Headline/Headline.tsx';
import Search from './components/Search/Search.tsx';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPage/context/ProductsPageStoreContext.tsx';
import { Meta } from '@/store/base.ts';
import ProductsPageStoreProvider from '@/store/ProductsPage/context/ProductsPageStoreProvider.tsx';

const ProductsPageContent = observer(() => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNumber = page ? Number(page) : 1;

    const store = useProductsPageStore();

    useEffect(() => {
        store.load();
        return () => store.destroy();
    }, [store]);

    if (store.meta === Meta.initial || store.meta === Meta.loading) {
        return <Loader />;
    }

    if (!store.list) return <Text>Oups...</Text>;

    return (
        <div>
            <Headline />

            <Search products={store.list} />

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

            <Pagination pagination={store.pagination} />
        </div>
    );
});

const Products = () => (
    <ProductsPageStoreProvider>
        <ProductsPageContent />
    </ProductsPageStoreProvider>
);

export default Products;
