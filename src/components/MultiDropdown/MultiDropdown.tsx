import React, { useState, useRef, useEffect, memo } from 'react';
import clsx from 'clsx';
import { ArrowDownIcon } from '@/components/Icons/ArrowDownIcon';
import { Input } from '@/components/Input';
import s from './MultiDropdown.module.scss';

export type Option = {
    /** Ключ варианта, используется для отправки на бек/использования в коде */
    key: string;
    /** Значение варианта, отображается пользователю */
    value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
    className?: string;
    /** Массив возможных вариантов для выбора */
    options: Option[];
    /** Текущие выбранные значения поля, может быть пустым */
    value: Option[];
    /** Callback, вызываемый при выборе варианта */
    onChange: (value: Option[]) => void;
    /** Заблокирован ли дропдаун */
    disabled?: boolean;
    /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
    getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
    className,
    options,
    value,
    onChange,
    disabled,
    getTitle,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filterText, setFilterText] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        if (!disabled && !isOpen) {
            setIsOpen(true);
        }
    };

    const handleSelect = (option: Option) => {
        const newValue = value.some((v) => v.key === option.key)
            ? value.filter((v) => v.key !== option.key)
            : [...value, option];
        onChange(newValue);
    };

    const handleInputChange = (e: string) => {
        setFilterText(e);
        if (!isOpen && !disabled) {
            setIsOpen(true);
        }
    };

    const filteredOptions = filterText
        ? options.filter((option) =>
              option.value.toLowerCase().includes(filterText.toLowerCase()),
          )
        : options;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setFilterText('');
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={clsx(s.multiDropdown, className)} ref={dropdownRef}>
            <Input
                className={s.multiDropdown__header}
                onClick={toggleDropdown}
                onChange={handleInputChange}
                value={filterText || (value.length > 0 ? getTitle(value) : '')}
                placeholder={getTitle([])}
                disabled={disabled}
                afterSlot={<ArrowDownIcon color="secondary" />}
            />

            {isOpen && !disabled && (
                <ul className={s.multiDropdown__list}>
                    {filteredOptions.map((option) => {
                        const hasSelected = value.some(
                            (v) => v.key === option.key,
                        );

                        return (
                            <li
                                key={option.key}
                                className={clsx(
                                    s.multiDropdown__item,
                                    hasSelected &&
                                        s.multiDropdown__item_selected,
                                )}
                                onClick={() => handleSelect(option)}
                            >
                                {option.value}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
export default memo(MultiDropdown);
