import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { MultiDropdown } from '@/components/MultiDropdown';
import { Text } from '@/components/Text';
import s from './Search.module.scss';
import { memo } from 'react';
import { useProductsPageStore } from '@/store/ProductsPage/context/ProductsPageStoreContext.tsx';
import { observer } from 'mobx-react-lite';

const Search = observer(() => {
    const store = useProductsPageStore();

    return (
        <div>
            <div className={s.inputWithButton}>
                <Input
                    value=""
                    placeholder="Search product"
                    onChange={() => {}}
                />
                <Button>Find now</Button>
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
                    {store.list.length}
                </Text>
            </div>
        </div>
    );
});

export default memo(Search);
