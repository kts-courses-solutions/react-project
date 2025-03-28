import { Text } from '@/components/Text';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { MultiDropdown } from '@/components/MultiDropdown';
import { Card } from '@/components/Card';
import { productsStyles } from '@/pages/products/index.ts';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';

const Products = () => {
    return (
        <div>
            <div className={productsStyles.headerBlock}>
                <Text tag="h1" className={productsStyles.headerBlockTitle}>
                    Products
                </Text>
                <Text tag="p" className={productsStyles.headerBlockSubtitle}>
                    We display products based on the latest products we have, if
                    you want to see our old products please enter the name of
                    the item
                </Text>
            </div>

            <div>
                <div className={productsStyles.inputWithButton}>
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
                    className={productsStyles.multiDropdown}
                />

                <div className={productsStyles.totalProducts}>
                    <Text tag="h2">Total products</Text>
                    <Text tag="span">184</Text>
                </div>
            </div>

            <div className={productsStyles.productCards}>
                <Card
                    image={''}
                    title="Title"
                    subtitle="Subtitle"
                    contentSlot="$20"
                    actionSlot={<Button>Buy now</Button>}
                />
                <Card
                    image={''}
                    title="Title"
                    subtitle="Subtitle"
                    contentSlot="$20"
                    actionSlot={<Button>Buy now</Button>}
                />
                <Card
                    image={''}
                    title="Title"
                    subtitle="Subtitle"
                    contentSlot="$20"
                    actionSlot={<Button>Buy now</Button>}
                />
                <Card
                    image={''}
                    title="Title"
                    subtitle="Subtitle"
                    contentSlot="$20"
                    actionSlot={<Button>Buy now</Button>}
                />
            </div>

            <div className={productsStyles.pageSelector}>
                <Link
                    to="/products/page/1"
                    className={productsStyles.arrowLeft}
                >
                    <ArrowRightIcon />
                </Link>
                <Link
                    to="/products/page/1"
                    className={clsx(
                        productsStyles.pageSelectorBtn,
                        productsStyles.pageSelectorBtnActive,
                    )}
                >
                    1
                </Link>
                <Link
                    to="/products/page/2"
                    className={clsx(productsStyles.pageSelectorBtn)}
                >
                    2
                </Link>
                <Link
                    to="/products/page/3"
                    className={clsx(productsStyles.pageSelectorBtn)}
                >
                    3
                </Link>
                <div className={clsx(productsStyles.pageSelectorBtn)}>...</div>
                <Link
                    to="/products/page/10"
                    className={clsx(productsStyles.pageSelectorBtn)}
                >
                    10
                </Link>

                <Link
                    to="/products/page/1"
                    className={productsStyles.arrowRight}
                >
                    <ArrowRightIcon />
                </Link>
            </div>
        </div>
    );
};

export default Products;
