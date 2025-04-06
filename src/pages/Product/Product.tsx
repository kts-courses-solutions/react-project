import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { Link, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Loader } from '@/components/Loader';
import s from './Product.module.scss';
import Related from '@/pages/Product/components/Related/Related.tsx';
import { ProductPageStoreProvider } from '@/store/ProductPageStore';
import { observer } from 'mobx-react-lite';
import { useProductPageStore } from '@/store/ProductPageStore';
import { Meta } from '@/store/DataStore/types.ts';

const ProductContent = observer(() => {
    const { productId } = useParams();
    const productNumber = productId ? Number(productId) : -1;

    const [currentImage, setCurrentImage] = useState(0);

    const store = useProductPageStore();

    useEffect(() => {
        store.load(productNumber);
    }, [productNumber, store]);

    const handlerPrevImage = useCallback(() => {
        if (!store.data) {
            return;
        }

        if (currentImage === 0) {
            setCurrentImage(store.data.images.length - 1);
            return;
        }

        setCurrentImage(currentImage - 1);
    }, [currentImage, store.data]);

    const handlerNextImage = useCallback(() => {
        if (!store.data) {
            return;
        }

        if (currentImage === store.data.images.length - 1) {
            setCurrentImage(0);
            return;
        }

        setCurrentImage(currentImage + 1);
    }, [currentImage, store.data]);

    if (store.meta === Meta.initial || store.meta === Meta.loading) {
        return <Loader />;
    }

    if (!store.data) {
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
                        onClick={handlerPrevImage}
                    >
                        <ArrowRightIcon color="white" />
                    </Button>
                    <img
                        src={store.data.images[currentImage]}
                        alt={store.data.title}
                        className={s.product__image__content}
                    />
                    <Button
                        className={s.product__image__btn__right}
                        onClick={handlerNextImage}
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
                            {store.data.title}
                        </Text>
                        <Text
                            tag="span"
                            weight="normal"
                            view="p-20"
                            className={s.productDesc__subtitle}
                        >
                            {store.data.description}
                        </Text>
                    </div>

                    <div className={s.productAction}>
                        <Text
                            tag="h2"
                            weight="bold"
                            className={s.productAction__title}
                        >
                            ${store.data.price}
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
});

const Product = () => {
    return (
        <ProductPageStoreProvider>
            <ProductContent />
        </ProductPageStoreProvider>
    );
};

export default Product;
