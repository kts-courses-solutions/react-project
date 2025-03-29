import clsx from 'clsx';
import React from 'react';
import { Text } from '@/components/Text';
import s from './Card.module.scss';

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
        <div className={clsx(s.card, className)} onClick={onClick}>
            <img src={image} alt="Card" className={s.card__image} />
            <div className={s.card__data}>
                <div className={s.card__body}>
                    {captionSlot && (
                        <div className={s.card__caption}>{captionSlot}</div>
                    )}
                    <Text
                        tag="h3"
                        className={s.card__title}
                        weight="medium"
                        view="p-20"
                    >
                        {title}
                    </Text>
                    <Text
                        tag="p"
                        className={s.card__subtitle}
                        weight="normal"
                        view="p-16"
                    >
                        {subtitle}
                    </Text>
                </div>
                <div className={s.card__footer}>
                    {contentSlot && (
                        <div className={s.card__content}>{contentSlot}</div>
                    )}
                    {actionSlot && <div>{actionSlot}</div>}
                </div>
            </div>
        </div>
    );
};

export default Card;
