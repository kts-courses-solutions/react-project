import React from 'react';
import clsx from 'clsx';
import { Loader } from '@/components/Loader';
import { buttonStyles } from '@/components/Button';

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
    return (
        <button
            className={clsx(
                buttonStyles.ktsBtn,
                disabled && buttonStyles.ktsBtnDisabled,
                loading && buttonStyles.ktsBtnLoading,
                className,
            )}
            disabled={loading ? true : disabled}
            onClick={loading ? undefined : onClick}
            {...props}
        >
            {loading && <Loader size="s" className={buttonStyles.ktsLoader} />}
            <span>{children}</span>
        </button>
    );
};

export default Button;
