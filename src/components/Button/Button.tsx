import React from 'react';
import clsx from 'clsx';
import { Loader } from '@/components/Loader';
import s from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Состояние загрузки */
    loading?: boolean;
    /** Текст кнопки */
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    loading,
    children,
    disabled,
    className,
    onClick,
    ...props
}: ButtonProps) => {
    const isDisabled = loading || disabled;

    return (
        <button
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
            {loading && <Loader size="s" className={s.btn__loader} />}
            <span>{children}</span>
        </button>
    );
};

export default Button;
