import React, { memo } from 'react';
import clsx from 'clsx';
import { CheckIcon } from '@/components/Icons/CheckIcon';
import s from './CheckBox.module.scss';

export type CheckBoxProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange'
> & {
    /** Вызывается при клике на чекбокс */
    onChange: (checked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({
    className,
    onChange,
    checked,
    disabled,
    ...props
}) => {
    return (
        <label className={clsx(s.checkBox, className)}>
            <input
                type="checkbox"
                className={s.checkBox__input}
                checked={checked}
                disabled={disabled}
                onChange={(e) => onChange(e.target.checked)}
                {...props}
            />
            <span className={s.checkBox__box}>
                {checked && (
                    <CheckIcon
                        className={s.checkBox__icon}
                        color={disabled ? 'check-disabled' : 'check'}
                        width={40}
                        height={40}
                    />
                )}
            </span>
        </label>
    );
};

export default memo(CheckBox);
