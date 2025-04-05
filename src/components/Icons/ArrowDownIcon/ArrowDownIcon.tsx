import * as React from 'react';
import { Icon } from '@/components/Icons/Icon';
import { IconProps } from '@/components/Icons/Icon';
import { memo } from 'react';

const ArrowDownIcon: React.FC<IconProps> = ({
    className,
    color = 'primary',
    width = 24,
    height = 24,
    ...props
}) => {
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            className={className}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.33563 8.74741L3.66436 7.25259L12 14.662L20.3356 7.25259L21.6644 8.74741L12 17.338L2.33563 8.74741Z"
                fill="currentColor"
            />
        </Icon>
    );
};

export default memo(ArrowDownIcon);
