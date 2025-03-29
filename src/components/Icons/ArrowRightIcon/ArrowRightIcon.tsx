import * as React from 'react';
import { Icon, IconProps } from '@/components/Icons/Icon';
import { memo } from 'react';

const ArrowRightIcon: React.FC<IconProps> = ({
    width = 35,
    height = 35,
    className,
    color = 'secondary',
    ...props
}: IconProps) => {
    // TODO: fix fill and stroke
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            className={className}
            viewBox="0 0 35 35"
            {...props}
        >
            <path
                d="M22.0062 5.95005L12.4979 15.4584C11.375 16.5813 11.375 18.4188 12.4979 19.5417L22.0062 29.05"
                fill="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Icon>
    );
};

export default memo(ArrowRightIcon);
