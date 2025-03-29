import * as React from 'react';
import clsx from 'clsx';
import s from './Icon.module.scss';

export type IconProps = React.SVGAttributes<SVGElement> & {
    className?: string;
    color?:
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'check-disabled'
        | 'check'
        | 'white';
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
    className,
    width,
    height,
    color,
    viewBox = '0 0 24 24',
    children,
    ...props
}: IconProps) => {
    return (
        <svg
            className={clsx(color && s[`icon_${color}`], className)}
            width={width}
            height={height}
            viewBox={viewBox}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {children}
        </svg>
    );
};

export default Icon;
