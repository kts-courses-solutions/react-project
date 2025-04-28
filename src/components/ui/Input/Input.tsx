import React, { memo } from 'react';
import clsx from 'clsx';
import s from './Input.module.scss';

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
            <div className={clsx(s.input, className)}>
                <input
                    ref={ref}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={s.input__field}
                    {...props}
                />
                {afterSlot && <div className={s.input__after}>{afterSlot}</div>}
            </div>
        );
    },
);

export default memo(Input);
