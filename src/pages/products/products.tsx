import { Text } from '@/components/Text';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { MultiDropdown } from '@/components/MultiDropdown';
import { Card } from '@/components/Card';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import { useGetProducts } from '@/pages/products/useGetProducts.ts';
import { Loader } from '@/components/Loader';
import clsx from 'clsx';
import s from './products.module.scss';
import { useEffect, useState } from 'react';
import { getPagination, PaginationInfo } from '@/utuls/pagination.ts';

const Products = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNumber = page ? Number(page) : 1;

    const [pagination, setPagination] = useState<PaginationInfo | null>(null);

    const { products, isLoading, error } = useGetProducts();

    useEffect(() => {
        if (products) {
            setPagination(getPagination(products.length, 9, pageNumber, 5));
        }
    }, [pageNumber, products]);

    if (isLoading) {
        return <Loader />;
    }

    if (!products || error) return <Text>Oups...</Text>;

    return (
        <div>
            <div className={s.headerBlock}>
                <Text tag="h1" className={s.headerBlockTitle}>
                    Products
                </Text>
                <Text tag="p" className={s.headerBlockSubtitle}>
                    We display products based on the latest products we have, if
                    you want to see our old products please enter the name of
                    the item
                </Text>
            </div>

            <div>
                <div className={s.inputWithButton}>
                    <Input
                        value=""
                        placeholder="Search product"
                        onChange={() => {}}
                    />
                    <Button>Find now</Button>
                </div>

                <MultiDropdown
                    options={[]}
                    value={[]}
                    onChange={() => {}}
                    getTitle={() => 'Filter'}
                    className={s.multiDropdown}
                />

                <div className={s.totalProducts}>
                    <Text tag="h2">Total products</Text>
                    <Text tag="span">{products.length}</Text>
                </div>
            </div>

            <div className={s.productCards}>
                {products
                    .slice((pageNumber - 1) * 9, (pageNumber - 1) * 9 + 9)
                    .map((product) => (
                        <Card
                            key={product.id}
                            image={product.images[0]}
                            title={product.title}
                            subtitle={product.description}
                            contentSlot={`$${product.price}`}
                            actionSlot={<Button>Buy now</Button>}
                        />
                    ))}
            </div>

            {pagination && (
                <div className={s.pageSelector}>
                    {pagination.hasPrevPage ? (
                        <Link
                            to={`/products?page=${pagination.currentPage - 1}`}
                            className={s.arrowLeft}
                        >
                            <ArrowRightIcon />
                        </Link>
                    ) : (
                        <div className={s.arrowLeft}>
                            <ArrowRightIcon />
                        </div>
                    )}

                    {pagination.visiblePages.map((page, index) =>
                        page === null ? (
                            <div
                                key={`ellipsis-${index}`}
                                className={clsx(s.pageSelectorBtn)}
                            >
                                ...
                            </div>
                        ) : (
                            <Link
                                key={`page-${page}`}
                                to={`/products?page=${page}`}
                                className={clsx(
                                    s.pageSelectorBtn,
                                    page === pagination.currentPage &&
                                        s.pageSelectorBtnActive,
                                )}
                            >
                                {page}
                            </Link>
                        ),
                    )}

                    {pagination.hasNextPage ? (
                        <Link
                            to={`/products?page=${pagination.currentPage + 1}`}
                            className={s.arrowRight}
                        >
                            <ArrowRightIcon />
                        </Link>
                    ) : (
                        <div className={s.arrowRight}>
                            <ArrowRightIcon />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;
