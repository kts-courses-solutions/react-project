import s from './Search.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { useSearchParams } from 'react-router-dom';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { MultiDropdown, Option } from '@/components/ui/MultiDropdown';
import useCategoriesStore from '@/store/CategoriesStore/context/CategoriesStoreContext';

const NO_CATEGORY_OPTION: Option = { key: 'no', value: 'No category' };
const NO_SORT_OPTION: Option = { key: 'no', value: 'No sort' };

const SORT_MAP = [
    NO_SORT_OPTION,
    {
        key: 'name',
        value: 'By name',
    },
    {
        key: 'price',
        value: 'By price',
    },
];

const Search = observer(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const store = useProductsPageStore();

    const categoriesStore = useCategoriesStore();
    const categoriesStoreData = categoriesStore.data;
    const [category, setCategory] = useState(
        searchParams.get('category') || 'no',
    );

    const [searchValue, setSearchValue] = useState(
        searchParams.get('title') || '',
    );
    const [price, setPrice] = useState(searchParams.get('price') || '');
    const [priceMin, setPriceMin] = useState(
        searchParams.get('price_min') || '',
    );
    const [priceMax, setPriceMax] = useState(
        searchParams.get('price_max') || '',
    );
    const [sort, setSort] = useState<Option>(() => {
        const sortParam = searchParams.get('sort');
        const found = SORT_MAP.find((s) => s.key === sortParam);
        return found ?? SORT_MAP[0];
    });

    useEffect(() => {
        categoriesStore.load();
    }, [categoriesStore]);

    const currentCategoryOption = useMemo(() => {
        if (category === 'no') return NO_CATEGORY_OPTION;
        const obj = categoriesStoreData?.find(
            (item) => item.id.toString() === category,
        );
        return obj ? { key: obj.id.toString(), value: obj.name } : undefined;
    }, [category, categoriesStoreData]);

    const categoriesOptions = useMemo(() => {
        if (!categoriesStore.data) return [NO_CATEGORY_OPTION];
        return [
            NO_CATEGORY_OPTION,
            ...categoriesStore.data.map((item) => ({
                key: item.id.toString(),
                value: item.name,
            })),
        ];
    }, [categoriesStore.data]);

    const handleSearchClick = () => {
        const newParams = new URLSearchParams();

        if (searchValue) newParams.set('title', searchValue);
        if (category && category !== 'no') newParams.set('category', category);
        if (price) newParams.set('price', price);
        if (priceMin) newParams.set('price_min', priceMin);
        if (priceMax) newParams.set('price_max', priceMax);

        setSearchParams(newParams);
    };

    const handleSortChange = (option: Option[]) => {
        const selected = option[1];
        setSort(selected);

        const newParams = new URLSearchParams(searchParams);
        if (selected.key === 'no') {
            newParams.delete('sort');
        } else {
            newParams.set('sort', selected.key);
        }
        setSearchParams(newParams);
    };

    const handleCategoryChange = (option: Option[]) => {
        setCategory(option[1].key);
    };

    return (
        <>
            <div className={s.inputWithButton}>
                <Input
                    value={searchValue}
                    placeholder="Search product"
                    onChange={(val) => setSearchValue(val)}
                />
                <Button onClick={handleSearchClick}>Find now</Button>
            </div>

            <div className={s.searchFilters}>
                <div className={s.searchFilters__input}>
                    <div className={s.searchFilters__input__item}>
                        <label className={s.searchFilters__input__item__label}>
                            Exact price
                        </label>
                        <Input
                            type="text"
                            value={price}
                            placeholder="Exact price"
                            onChange={(val) => setPrice(val)}
                        />
                    </div>

                    <div className={s.searchFilters__input__item}>
                        <label className={s.searchFilters__input__item__label}>
                            Price range
                        </label>
                        <div
                            className={s.searchFilters__input__item__priceRange}
                        >
                            <Input
                                type="number"
                                value={priceMin}
                                placeholder="Minimum price"
                                onChange={(val) => setPriceMin(val)}
                            />
                            <Input
                                type="number"
                                value={priceMax}
                                placeholder="Maximum price"
                                onChange={(val) => setPriceMax(val)}
                            />
                        </div>
                    </div>
                </div>

                <div className={s.searchFilters__dropdown}>
                    <div className={s.searchFilters__dropdown__item}>
                        <label
                            className={s.searchFilters__dropdown__item__label}
                        >
                            Category
                        </label>
                        <MultiDropdown
                            options={categoriesOptions}
                            value={
                                currentCategoryOption
                                    ? [currentCategoryOption]
                                    : [NO_CATEGORY_OPTION]
                            }
                            onChange={handleCategoryChange}
                            getTitle={() => {
                                return currentCategoryOption
                                    ? currentCategoryOption.value
                                    : NO_CATEGORY_OPTION.value;
                            }}
                        />
                    </div>

                    <div className={s.searchFilters__dropdown__item}>
                        <label
                            className={s.searchFilters__dropdown__item__label}
                        >
                            Sort
                        </label>
                        <MultiDropdown
                            options={SORT_MAP}
                            value={[sort]}
                            onChange={handleSortChange}
                            getTitle={() => {
                                return sort.value;
                            }}
                        />
                    </div>
                </div>
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
                    {store.total ?? '...'}
                </Text>
            </div>
        </>
    );
});

export default Search;
