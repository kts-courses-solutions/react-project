import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Loader } from '@/components/Loader';
import s from './Button.module.scss';
import { Slot, Slottable } from '@radix-ui/react-slot';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Состояние загрузки */
    loading?: boolean;
    /** Текст кнопки */
    children: React.ReactNode;
    asChild?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    loading,
    children,
    disabled,
    className,
    onClick,
    asChild,
    ...props
}: ButtonProps) => {
    const isDisabled = loading || disabled;

    const Comp = asChild ? Slot : 'button';
    const CompChildren = asChild ? Fragment : 'span';

    return (
        <Comp
            className={clsx(
                s.btn,
                disabled && s.btn_disabled,
                loading && s.btn_loading,
                className,
            )}
            disabled={isDisabled}
            onClick={loading ? undefined : onClick}
            {...props}
        >
            <div>
                {loading && <Loader size="s" className={s.btn__loader} />}
                <CompChildren>
                    <Slottable>{children}</Slottable>
                </CompChildren>
            </div>
        </Comp>
    );
};

export default Button;
