import clsx from 'clsx';
import React, { memo } from 'react';
import { Text } from '@/components/ui/Text';
import s from './Card.module.scss';
import { Link } from 'react-router-dom';

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
    subtitle?: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    contentSlot?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
    /** Слот для действия */
    actionSlot?: React.ReactNode;
    /** Ссылка */
    link?: string;
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
    link,
}) => {
    const LinkWrapper = ({ children }: { children: React.ReactNode }) =>
        link ? (
            <Link to={link} style={{ textDecoration: 'none' }}>
                {children}
            </Link>
        ) : (
            <>{children}</>
        );

    return (
        <div className={clsx(s.card, className)} onClick={onClick}>
            <LinkWrapper>
                <img src={image} alt="Card" className={s.card__image} />
            </LinkWrapper>
            <div className={s.card__data}>
                <div className={s.card__body}>
                    {captionSlot && (
                        <div className={s.card__caption}>{captionSlot}</div>
                    )}
                    <LinkWrapper>
                        <Text
                            tag="h3"
                            className={s.card__title}
                            weight="medium"
                            view="p-20"
                        >
                            {title}
                        </Text>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Text
                            tag="p"
                            className={s.card__subtitle}
                            weight="normal"
                            view="p-16"
                        >
                            {subtitle}
                        </Text>
                    </LinkWrapper>
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

export default memo(Card);
