import s from './Content.module.scss';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { Meta } from '@/store/DataStore/types.ts';
import { Text } from '@/components/ui/Text';
import { Loader } from '@/components/ui/Loader';
import { Card } from '@/components/ui/Card';
import { PaymentDialog } from '@/components/shared/PaymentDialog';

const Content = observer(() => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNumber = page ? Number(page) : 1;

    const store = useProductsPageStore();

    const getContent = () => {
        const newData = [...store.data].slice(
            (pageNumber - 1) * 9,
            (pageNumber - 1) * 9 + 9,
        );
        if (store.sort === 'name')
            return newData.sort((a, b) => a.title.localeCompare(b.title));
        if (store.sort === 'price')
            return newData.sort(
                (a, b) => (a.price ? a.price : 0) - (b.price ? b.price : 0),
            );

        if (store.sort === 'no') return newData;
        return newData;
    };

    if (store.meta === Meta.initial || store.meta === Meta.loading) {
        return <Loader />;
    }

    if (!store.data) return <Text>Oups...</Text>;

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
                        <PaymentDialog
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
