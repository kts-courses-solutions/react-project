import s from '@/pages/Product/Product.module.scss';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/Icons/ArrowRightIcon';
import { useCallback, useState } from 'react';

interface ImagesCarouselProps {
    images: string[];
    alt: string;
}

const ImagesCarousel = ({ images, alt }: ImagesCarouselProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlerPrevImage = useCallback(() => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
            return;
        }

        setCurrentImage(currentImage - 1);
    }, [currentImage, images]);

    const handlerNextImage = useCallback(() => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
            return;
        }

        setCurrentImage(currentImage + 1);
    }, [currentImage, images]);

    return (
        <div className={s.product__image__wrapper}>
            {images.length > 1 && (
                <Button
                    className={s.product__image__btn__left}
                    onClick={handlerPrevImage}
                >
                    <ArrowRightIcon color="white" />
                </Button>
            )}
            <img
                src={images[currentImage]}
                alt={alt}
                className={s.product__image__content}
            />
            {images.length > 1 && (
                <Button
                    className={s.product__image__btn__right}
                    onClick={handlerNextImage}
                >
                    <ArrowRightIcon color="white" />
                </Button>
            )}
        </div>
    );
};

export default ImagesCarousel;
