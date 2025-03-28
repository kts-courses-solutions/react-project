import * as React from 'react';
import clsx from 'clsx';
import { Icon, IconProps } from '@/components/Icons/Icon';
import { arrowRightIconStyles } from '@/components/Icons/ArrowRightIcon';

const CheckIcon: React.FC<IconProps> = ({
    width = 35,
    height = 35,
    className,
    color = 'primary',
    ...props
}: IconProps) => {
    return (
        <Icon
            width={width}
            height={height}
            className={clsx(
                arrowRightIconStyles.ktsArrowRightIcon,
                color && arrowRightIconStyles[`ktsArrowRightIcon--${color}`],
                className,
            )}
            viewBox="0 0 35 35"
            {...props}
        >
            <path
                d="M22.0062 5.95005L12.4979 15.4584C11.375 16.5813 11.375 18.4188 12.4979 19.5417L22.0062 29.05"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Icon>
    );
};

export default CheckIcon;
