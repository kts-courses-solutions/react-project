import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetProduct } from './hooks/useGetProduct.ts';
import { Loader } from '@/components/Loader';
import s from './Product.module.scss';
import Related from '@/pages/product/components/Related/Related.tsx';

const ProductPage = () => {
    const { productId } = useParams();
    const productNumber = productId ? Number(productId) : -1;

    const [currentImage, setCurrentImage] = useState(0);

    const { product, isLoading } = useGetProduct(productNumber);

    if (isLoading) {
        return <Loader />;
    }

    if (!product) {
        return <Text>Oups</Text>;
    }

    return (
        <div>
            <Link to="/products" className={s.back}>
                <ArrowRightIcon />
                Back
            </Link>

            <div className={s.product}>
                <div className={s.product__image__wrapper}>
                    <Button
                        className={s.product__image__btn__left}
                        onClick={() => {
                            if (currentImage === 0) {
                                setCurrentImage(product.images.length - 1);
                            } else {
                                setCurrentImage(currentImage - 1);
                            }
                        }}
                    >
                        <ArrowRightIcon color="white" />
                    </Button>
                    <img
                        src={product.images[currentImage]}
                        alt={product.title}
                        className={s.product__image__content}
                    />
                    <Button
                        className={s.product__image__btn__right}
                        onClick={() => {
                            if (currentImage === product.images.length - 1) {
                                setCurrentImage(0);
                            } else {
                                setCurrentImage(currentImage + 1);
                            }
                        }}
                    >
                        <ArrowRightIcon color="white" />
                    </Button>
                </div>

                <div className={s.productDesc}>
                    <div className={s.productDesc__text}>
                        <Text
                            tag="h1"
                            weight="bold"
                            className={s.productDesc__title}
                        >
                            {product.title}
                        </Text>
                        <Text
                            tag="span"
                            weight="normal"
                            view="p-20"
                            className={s.productDesc__subtitle}
                        >
                            {product.description}
                        </Text>
                    </div>

                    <div className={s.productAction}>
                        <Text
                            tag="h2"
                            weight="bold"
                            className={s.productAction__title}
                        >
                            ${product.price}
                        </Text>
                        <div className={s.productAction__btn}>
                            <Button className={s.productAction__btn__buy}>
                                Buy now
                            </Button>
                            <Button className={s.productAction__btn__cart}>
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Related />
        </div>
    );
};

export default ProductPage;
