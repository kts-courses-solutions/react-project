import React from 'react';
import clsx from 'clsx';
import { inputStyles } from '@/components/Input';

export type InputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
> & {
    /** Значение поля */
    value: string;
    /** Callback, вызываемый при вводе данных в поле */
    onChange: (value: string) => void;
    /** Слот для иконки справа */
    afterSlot?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ value, onChange, afterSlot, className, ...props }, ref) => {
        return (
            <div className={clsx(inputStyles.ktsInputContainer, className)}>
                <input
                    ref={ref}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={inputStyles.ktsInputField}
                    {...props}
                />
                {afterSlot && (
                    <div className={inputStyles.ktsInputAfterSlot}>
                        {afterSlot}
                    </div>
                )}
            </div>
        );
    },
);

Input.displayName = 'Input';

export default Input;
