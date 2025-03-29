import * as React from 'react';
import { Icon, IconProps } from '@/components/Icons/Icon';
import { memo } from 'react';

const CheckIcon: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    className,
    color = 'secondary',
    ...props
}: IconProps) => {
    return (
        <Icon
            width={width}
            height={height}
            color={color}
            colorType="stroke"
            className={className}
            {...props}
        >
            <path d="M4 11.6129L9.87755 18L20 7" strokeWidth="2" />
        </Icon>
    );
};

export default memo(CheckIcon);
