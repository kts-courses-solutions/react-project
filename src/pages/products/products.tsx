import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetProducts } from '@/pages/products/useGetProducts.ts';
import { Loader } from '@/components/Loader';
import s from './products.module.scss';
import { useEffect, useState } from 'react';
import { getPagination, PaginationInfo } from '@/utils/pagination.ts';
import Pagination from '@/pages/products/pagination.tsx';
import Headline from './headline';
import Search from './search';
import { observer } from 'mobx-react-lite';

const Products = observer(() => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNumber = page ? Number(page) : 1;

    const [pagination, setPagination] = useState<PaginationInfo | null>(null);

    const { products, isLoading } = useGetProducts();

    useEffect(() => {
        console.log('products', products);
        if (products) {
            setPagination(getPagination(products.length, 9, pageNumber, 5));
        }
    }, [pageNumber, products]);

    if (isLoading) {
        return <Loader />;
    }

    if (!products) return <Text>Oups...</Text>;

    return (
        <div>
            <Headline />

            <Search products={products} />

            <div className={s.productCards}>
                {products
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

            <Pagination pagination={pagination} />
        </div>
    );
});

export default Products;
