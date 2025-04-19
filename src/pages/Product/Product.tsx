import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import s from './Product.module.scss';
import { ProductPageStoreProvider } from '@/store/ProductPageStore';
import { observer } from 'mobx-react-lite';
import { useProductPageStore } from '@/store/ProductPageStore';
import { Meta } from '@/store/DataStore/types.ts';
import { BackButton } from './components/BackButton';
import { Related } from './components/Related';
import { Loader } from '@/components/ui/Loader';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/Icons/ArrowRightIcon';

const ProductContent = observer(() => {
    const paymentFormRef = useRef<HTMLDivElement>(null);

    const { productId } = useParams();
    const productNumber = productId ? Number(productId) : -1;

    const [buyNow, setBuyNow] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const store = useProductPageStore();

    useEffect(() => {
        store.load(productNumber);
    }, [productNumber, store]);

    useEffect(() => {
        if (store.data && buyNow) {
            const checkout = new window.YooMoneyCheckoutWidget({
                confirmation_token: 'ct-2f95814d-000f-5000-b000-1c036b66b80f',
                return_url: 'http://localhost:5173/#/products',
                error_callback: function (error: Error) {
                    console.log(error);
                },
            });

            checkout.render('payment-form');

            return () => {
                checkout.destroy();
            };
        }
    }, [store.data, buyNow]);

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
            <BackButton />

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
                        {!buyNow ? (
                            <>
                                <div className={s.productAction__btn}>
                                    <Button
                                        className={s.productAction__btn__buy}
                                        onClick={() => setBuyNow(true)}
                                    >
                                        Buy now
                                    </Button>
                                    <Button
                                        className={s.productAction__btn__cart}
                                    >
                                        Add to cart
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div id="payment-form" ref={paymentFormRef}></div>
                        )}
                    </div>
                </div>
            </div>

            <Related product={store.data} />
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
