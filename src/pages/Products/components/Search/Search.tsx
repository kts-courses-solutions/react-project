import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { MultiDropdown } from '@/components/MultiDropdown';
import { Text } from '@/components/Text';
import s from './Search.module.scss';
import { memo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { useSearchParams } from 'react-router-dom';

const Search = observer(() => {
    const [searchParams, setSearchParams] = useSearchParams();

    const store = useProductsPageStore();

    const [searchValue, setSearchValue] = useState('');

    const handleSearchClick = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('title', searchValue);
        setSearchParams(newParams);
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
                options={[]}
                value={[]}
                onChange={() => {}}
                getTitle={() => 'Filter'}
                className={s.multiDropdown}
            />

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
