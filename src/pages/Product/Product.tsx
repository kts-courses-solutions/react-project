import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Product.module.scss';
import { ProductPageStoreProvider } from '@/store/ProductPageStore';
import { observer } from 'mobx-react-lite';
import { useProductPageStore } from '@/store/ProductPageStore';
import { Meta } from '@/store/DataStore/types.ts';
import { BackButton } from './components/BackButton';
import { Related } from './components/Related';
import { ImagesCarousel } from './components/ImagesCarousel';
import { Loader } from '@/components/ui/Loader';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import useYooMoneyPayment from '@/hooks/useYooMoneyPayment.ts';
import { YOOMONEY_CONTAINER_NAME } from '@/config/yoomoney';

const ProductContent = observer(() => {
    const { productId } = useParams();
    const { checkout } = useYooMoneyPayment();
    const productNumber = productId ? Number(productId) : -1;

    const [buyNow, setBuyNow] = useState(false);

    const store = useProductPageStore();
    const data = store.data;

    useEffect(() => {
        store.load(productNumber);
    }, [productNumber, store]);

    useEffect(() => {
        if (data && buyNow) {
            checkout(data.price, data.title);
        }
    }, [data, buyNow]);

    if (store.meta === Meta.initial || store.meta === Meta.loading) {
        return <Loader />;
    }

    if (!data) {
        return <Text>Oups</Text>;
    }

    return (
        <div>
            <BackButton />

            <div className={s.product}>
                <ImagesCarousel images={data.images} alt={data.title} />

                <div className={s.productDesc}>
                    <div className={s.productDesc__text}>
                        <Text
                            tag="h1"
                            weight="bold"
                            className={s.productDesc__title}
                        >
                            {data.title}
                        </Text>
                        <Text
                            tag="span"
                            weight="normal"
                            view="p-20"
                            className={s.productDesc__subtitle}
                        >
                            {data.description}
                        </Text>
                    </div>

                    <div className={s.productAction}>
                        <Text
                            tag="h2"
                            weight="bold"
                            className={s.productAction__title}
                        >
                            ${data.price}
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
                            <div id={YOOMONEY_CONTAINER_NAME}></div>
                        )}
                    </div>
                </div>
            </div>

            <Related product={data} />
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
