import * as React from 'react';
import clsx from 'clsx';
import s from './Icon.module.scss';
import { memo } from 'react';

export type IconProps = React.SVGAttributes<SVGElement> & {
    className?: string;
    color?:
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'check-disabled'
        | 'check'
        | 'white';
    colorType?: 'fill' | 'stroke';
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
    className,
    width,
    height,
    color,
    colorType = 'fill',
    viewBox = '0 0 24 24',
    children,
    ...props
}: IconProps) => {
    return (
        <svg
            className={clsx(
                color && s[`icon_${colorType}_${color}`],
                className,
            )}
            width={width}
            height={height}
            viewBox={viewBox}
            fill={colorType === 'fill' ? 'currentColor' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {children}
        </svg>
    );
};

export default memo(Icon);
