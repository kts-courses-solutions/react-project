import React from 'react';
import clsx from 'clsx';
import { checkBoxStyles } from '@/components/CheckBox';
import { CheckIcon } from '@/components/Icons/CheckIcon';

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
        <label className={clsx(checkBoxStyles.ktsCheckBox, className)}>
            <input
                type="checkbox"
                className={checkBoxStyles.ktsCheckBoxInput}
                checked={checked}
                disabled={disabled}
                onChange={(e) => onChange(e.target.checked)}
                {...props}
            />
            <span className={checkBoxStyles.ktsCheckBoxBox}>
                {checked && (
                    <CheckIcon
                        className={checkBoxStyles.ktsCheckBoxIcon}
                        color={disabled ? 'check-disabled' : 'check'}
                        width={40}
                        height={40}
                    />
                )}
            </span>
        </label>
    );
};

export default CheckBox;
