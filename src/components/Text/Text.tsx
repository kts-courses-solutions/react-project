import * as React from 'react';
import clsx from 'clsx';
import s from './Text.module.scss';
import { memo } from 'react';

export type TextProps = {
    /** Дополнительный класс */
    className?: string;
    /** Стиль отображения */
    view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
    /** Html-тег */
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
    /** Начертание шрифта */
    weight?: 'normal' | 'medium' | 'bold';
    /** Контент */
    children: React.ReactNode;
    /** Цвет */
    color?: 'primary' | 'secondary' | 'accent';
    /** Максимальное кол-во строк */
    maxLines?: number;
};

const Text: React.FC<TextProps> = ({
    className,
    view,
    tag: Tag = 'span',
    weight,
    children,
    color,
    maxLines,
}) => {
    const baseClasses = clsx(
        s['kts-text'],
        view && s[`kts-text--${view}`],
        weight && s[`kts-text--${weight}`],
        color && s[`kts-text--${color}`],
        className,
    );

    const styleMap: React.CSSProperties = maxLines
        ? {
              WebkitLineClamp: maxLines,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
          }
        : {};

    return (
        <Tag className={baseClasses} style={styleMap}>
            {children}
        </Tag>
    );
};

export default memo(Text);
