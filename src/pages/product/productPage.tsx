import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetProduct } from './useGetProduct.ts';
import { Loader } from '@/components/Loader';
import s from './product.module.scss';
import Related from '@/pages/product/related.tsx';

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
                <div className={s.imgWrapper}>
                    <Button
                        className={s.leftImgBtn}
                        onClick={() => {
                            if (currentImage === 0) {
                                setCurrentImage(product.images.length - 1);
                            } else {
                                setCurrentImage(1);
                            }
                        }}
                    >
                        <ArrowRightIcon color="white" />
                    </Button>
                    <img
                        src={product.images[currentImage]}
                        alt={product.title}
                    />
                    <Button
                        className={s.rightImgBtn}
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
                    <div className={s.text}>
                        <Text tag="h1">{product.title}</Text>
                        <Text tag="span">{product.description}</Text>
                    </div>

                    <div className={s.productAction}>
                        <Text tag="h2">${product.price}</Text>
                        <div className={s.buttons}>
                            <Button className={s.buyBtn}>Buy now</Button>
                            <Button className={s.cartBtn}>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>

            <Related />
        </div>
    );
};

export default ProductPage;
