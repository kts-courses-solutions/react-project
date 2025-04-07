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
    // {
    //     key: 'price_min',
    //     value: 'Минимальная цена'
    // },
    // {
    //     key: 'price_max',
    //     value: 'Максимальная цена'
    // }
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
            const paramValue = searchParams.get(option.key);
            if (paramValue !== null) {
                activeFilters.push(option);
                inputs[option.key] = paramValue;
            }
        });

        setDropdownValue(activeFilters);
        setFilterInputs(inputs);
    }, [searchParams]);

    const handleSearchClick = () => {
        const newParams = new URLSearchParams();
        newParams.set('title', searchValue);

        dropdownValue.forEach(({ key }) => {
            const value = filterInputs[key];
            if (value) {
                newParams.set(key, value);
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
                {dropdownValue.map(({ key, value }) => (
                    <Input
                        type="number"
                        key={key}
                        value={filterInputs[key] || ''}
                        placeholder={value}
                        onChange={(val) => handleFilterInputChange(key, val)}
                    />
                ))}
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
