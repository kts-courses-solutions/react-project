import * as React from 'react';
import { Icon, IconProps } from '@/components/Icons/Icon';
import { checkIconStyles } from '@/components/Icons/CheckIcon';
import clsx from 'clsx';

const CheckIcon: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    className,
    color,
    ...props
}: IconProps) => {
    return (
        <Icon
            width={width}
            height={height}
            className={clsx(
                checkIconStyles.ktsCheckIcon,
                color && checkIconStyles[`ktsCheckIcon--${color}`],
                className,
            )}
            {...props}
        >
            <path d="M4 11.6129L9.87755 18L20 7" strokeWidth="2" />
        </Icon>
    );
};

export default CheckIcon;
