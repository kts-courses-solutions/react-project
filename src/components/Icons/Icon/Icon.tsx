import * as React from 'react';

export type IconProps = React.SVGAttributes<SVGElement> & {
    className?: string;
    color?: 'primary' | 'secondary' | 'accent' | 'check-disabled' | 'check';
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
    className,
    width,
    height,
    children,
    ...props
}: IconProps) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {children}
        </svg>
    );
};

export default Icon;
