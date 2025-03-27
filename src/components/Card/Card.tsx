import clsx from 'clsx';
import React from 'react';
import { Text } from '@/components/Text';
import { cardStyles } from '@/components/Card/index.ts';

export type CardProps = {
    /** Дополнительный classname */
    className?: string;
    /** URL изображения */
    image: string;
    /** Слот над заголовком */
    captionSlot?: React.ReactNode;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Описание карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    contentSlot?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
    /** Слот для действия */
    actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
    className,
    image,
    captionSlot,
    title,
    subtitle,
    contentSlot,
    onClick,
    actionSlot,
}) => {
    return (
        <div className={clsx(cardStyles.ktsCard, className)} onClick={onClick}>
            <img src={image} alt="Card" className={cardStyles.ktsCardImage} />
            <div className={cardStyles.ktsCardData}>
                <div className={cardStyles.ktsCardBody}>
                    {captionSlot && (
                        <div className={cardStyles.ktsCardCaption}>
                            {captionSlot}
                        </div>
                    )}
                    <Text tag="h3" className={cardStyles.ktsCardTitle}>
                        {title}
                    </Text>
                    <Text tag="p" className={cardStyles.ktsCardSubtitle}>
                        {subtitle}
                    </Text>
                </div>
                <div className={cardStyles.ktsCardFooter}>
                    {contentSlot && (
                        <div className={cardStyles.ktsCardContent}>
                            {contentSlot}
                        </div>
                    )}
                    {actionSlot && <div>{actionSlot}</div>}
                </div>
            </div>
        </div>
    );
};

export default Card;
