import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { MultiDropdown } from '@/components/MultiDropdown';
import { Text } from '@/components/Text';
import { Product } from '@/types/products';
import s from './Search.module.scss';
import { memo } from 'react';

interface SearchProps {
    products: Product[];
}

const Search = ({ products }: SearchProps) => {
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
                    {products.length}
                </Text>
            </div>
        </div>
    );
};

export default memo(Search);
