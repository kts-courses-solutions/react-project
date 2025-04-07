import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { MultiDropdown } from '@/components/MultiDropdown';
import { Text } from '@/components/Text';
import s from './Search.module.scss';
import { memo, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { useSearchParams } from 'react-router-dom';
import { Option } from '@/components/MultiDropdown';

const FILTER_MAP: Option[] = [
    {
        key: 'category',
        value: 'Категория',
    },
    {
        key: 'price',
        value: 'Точная цена',
    },
    {
        key: 'price_range',
        value: 'Диапазон цен',
    },
];

const Search = observer(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const store = useProductsPageStore();

    const [searchValue, setSearchValue] = useState(
        searchParams.get('title') || '',
    );
    const [dropdownValue, setDropdownValue] = useState<Option[]>([]);
    const [filterInputs, setFilterInputs] = useState<Record<string, string>>(
        {},
    );

    useEffect(() => {
        const activeFilters: Option[] = [];
        const inputs: Record<string, string> = {};

        FILTER_MAP.forEach((option) => {
            if (option.key === 'price_range') {
                const min = searchParams.get('price_min');
                const max = searchParams.get('price_max');
                if (min || max) {
                    activeFilters.push(option);
                    if (min) inputs['price_min'] = min;
                    if (max) inputs['price_max'] = max;
                }
            } else {
                const paramValue = searchParams.get(option.key);
                if (paramValue !== null) {
                    activeFilters.push(option);
                    inputs[option.key] = paramValue;
                }
            }
        });

        setDropdownValue(activeFilters);
        setFilterInputs(inputs);
    }, [searchParams]);

    const handleSearchClick = () => {
        const newParams = new URLSearchParams();
        newParams.set('title', searchValue);

        dropdownValue.forEach(({ key }) => {
            if (key === 'price_range') {
                if (filterInputs['price_min']) {
                    newParams.set('price_min', filterInputs['price_min']);
                }
                if (filterInputs['price_max']) {
                    newParams.set('price_max', filterInputs['price_max']);
                }
            } else {
                const value = filterInputs[key];
                if (value) {
                    newParams.set(key, value);
                }
            }
        });

        setSearchParams(newParams);
    };

    const handleFilterInputChange = (key: string, value: string) => {
        setFilterInputs((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <div>
            <div className={s.inputWithButton}>
                <Input
                    value={searchValue}
                    placeholder="Search product"
                    onChange={(value) => setSearchValue(value)}
                />
                <Button onClick={handleSearchClick}>Find now</Button>
            </div>

            <MultiDropdown
                options={FILTER_MAP}
                value={dropdownValue}
                onChange={(value) => setDropdownValue(value)}
                getTitle={() =>
                    dropdownValue.map((item) => item.value).join(', ')
                }
                placeholder="Choose filters:"
                className={s.multiDropdown}
            />

            <div className={s.inputFilters}>
                {dropdownValue.map(({ key }) => {
                    if (key === 'price_range') {
                        return (
                            <div
                                key="price_range"
                                className={s.inputFilters__priceRange}
                            >
                                <Input
                                    type="number"
                                    value={filterInputs['price_min'] || ''}
                                    placeholder="Минимальная цена"
                                    onChange={(val) =>
                                        handleFilterInputChange(
                                            'price_min',
                                            val,
                                        )
                                    }
                                />
                                <Input
                                    type="number"
                                    value={filterInputs['price_max'] || ''}
                                    placeholder="Максимальная цена"
                                    onChange={(val) =>
                                        handleFilterInputChange(
                                            'price_max',
                                            val,
                                        )
                                    }
                                />
                            </div>
                        );
                    }

                    return (
                        <Input
                            key={key}
                            type="number"
                            value={filterInputs[key] || ''}
                            placeholder={
                                FILTER_MAP.find((f) => f.key === key)?.value ||
                                ''
                            }
                            onChange={(val) =>
                                handleFilterInputChange(key, val)
                            }
                        />
                    );
                })}
            </div>

            <div className={s.totalProducts}>
                <Text tag="h2" weight="bold" className={s.totalProducts__title}>
                    Total products
                </Text>
                <Text
                    tag="span"
                    weight="bold"
                    view="p-20"
                    className={s.totalProducts__subtitle}
                >
                    {store.data.length}
                </Text>
            </div>
        </div>
    );
});

export default memo(Search);
