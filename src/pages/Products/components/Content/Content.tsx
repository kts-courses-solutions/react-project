import s from './Content.module.scss';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { Meta } from '@/store/DataStore/types.ts';
import { Loader } from '@/components/ui/Loader';
import { Card } from '@/components/ui/Card';
import { PaymentModal } from '@/components/shared/PaymentModal';
import { useEffect, useMemo } from 'react';

const Content = observer(() => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title') || undefined;
    const categoryId = searchParams.get('category') || undefined;
    const price = searchParams.get('price') || undefined;
    const price_min = searchParams.get('price_min') || undefined;
    const price_max = searchParams.get('price_max') || undefined;

    const store = useProductsPageStore();

    const loadParams = useMemo(() => {
        return {
            offset: store.offset.toString(),
            limit: store.limit.toString(),
            title,
            categoryId,
            price,
            price_min,
            price_max,
        };
    }, [
        store.offset,
        store.limit,
        title,
        categoryId,
        price,
        price_min,
        price_max,
    ]);

    useEffect(() => {
        store.load(loadParams);
    }, [store, loadParams]);

    const getContent = () => {
        const newData = [...store.data];
        if (searchParams.get('sort') === 'name')
            return newData.sort((a, b) => a.title.localeCompare(b.title));
        if (searchParams.get('sort') === 'price')
            return newData.sort(
                (a, b) => (a.price ? a.price : 0) - (b.price ? b.price : 0),
            );

        if (store.sort === 'no') return newData;
        return newData;
    };

    if (store.meta === Meta.initial || store.meta === Meta.loading) {
        return <Loader />;
    }

    if (!store.data || store.meta === Meta.error) return;

    return (
        <div className={s.productCards}>
            {getContent().map((item) => (
                <Card
                    key={item.id}
                    image={item.images[0]}
                    title={item.title}
                    subtitle={item.description}
                    contentSlot={`$${item.price}`}
                    actionSlot={
                        <PaymentModal
                            price={item.price}
                            description={item.title}
                        />
                    }
                    link={`/product/${item.id}`}
                />
            ))}
        </div>
    );
});

export default Content;
