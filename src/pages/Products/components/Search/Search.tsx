import s from './Search.module.scss';
import { memo, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { useSearchParams } from 'react-router-dom';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const Search = observer(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const store = useProductsPageStore();

    const [searchValue, setSearchValue] = useState(
        searchParams.get('title') || '',
    );
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');

    useEffect(() => {
        setCategory(searchParams.get('category') || '');
        setPrice(searchParams.get('price') || '');
        setPriceMin(searchParams.get('price_min') || '');
        setPriceMax(searchParams.get('price_max') || '');
    }, [searchParams]);

    const handleSearchClick = () => {
        const newParams = new URLSearchParams();
        newParams.set('title', searchValue);

        if (category) newParams.set('category', category);
        if (price) newParams.set('price', price);
        if (priceMin) newParams.set('price_min', priceMin);
        if (priceMax) newParams.set('price_max', priceMax);

        setSearchParams(newParams);
    };

    return (
        <div>
            <div>
                <div className={s.inputWithButton}>
                    <Input
                        value={searchValue}
                        placeholder="Search product"
                        onChange={(val) => setSearchValue(val)}
                    />
                    <Button onClick={handleSearchClick}>Find now</Button>
                </div>

                <div className={s.inputFilters}>
                    <div className={s.inputFilters__item}>
                        <label className={s.inputFilters__label}>
                            Категория
                        </label>
                        <Input
                            type="text"
                            value={category}
                            placeholder="Категория"
                            onChange={(val) => setCategory(val)}
                        />
                    </div>

                    <div className={s.inputFilters__item}>
                        <label className={s.inputFilters__label}>
                            Точная цена
                        </label>
                        <Input
                            type="text"
                            value={price}
                            placeholder="Точная цена"
                            onChange={(val) => setPrice(val)}
                        />
                    </div>

                    <div className={s.inputFilters__item}>
                        <label className={s.inputFilters__label}>
                            Диапазон цен
                        </label>
                        <div className={s.inputFilters__priceRange}>
                            <Input
                                type="number"
                                value={priceMin}
                                placeholder="Минимальная цена"
                                onChange={(val) => setPriceMin(val)}
                            />
                            <Input
                                type="number"
                                value={priceMax}
                                placeholder="Максимальная цена"
                                onChange={(val) => setPriceMax(val)}
                            />
                        </div>
                    </div>
                </div>

                <div className={s.totalProducts}>
                    <Text
                        tag="h2"
                        weight="bold"
                        className={s.totalProducts__title}
                    >
                        Total products
                    </Text>
                    <Text
                        tag="span"
                        weight="bold"
                        view="p-20"
                        className={s.totalProducts__subtitle}
                    >
                        {store.total}
                    </Text>
                </div>
            </div>

            <div></div>
        </div>
    );
});

export default memo(Search);
