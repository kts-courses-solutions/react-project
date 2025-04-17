import { Link } from 'react-router-dom';
import useCategoriesStore from '@/store/CategoriesStore/context/CategoriesStoreContext.ts';
import { useEffect } from 'react';
import s from './Content.module.scss';
import { observer } from 'mobx-react-lite';
import { Meta } from '@/store/DataStore/types.ts';
import { Text } from '@/components/ui/Text';
import { Loader } from '@/components/ui/Loader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const Content = observer(() => {
    const store = useCategoriesStore();

    useEffect(() => {
        store.load();
    }, [store]);

    if (store.meta === Meta.initial || store.meta === Meta.loading) {
        return <Loader />;
    }

    if (!store.data) return <Text>Oups...</Text>;

    return (
        <div className={s.categories}>
            {store.data.map((item) => (
                <Card
                    key={item.id}
                    image={item.image}
                    title={item.name}
                    actionSlot={
                        <Button asChild>
                            <Link
                                to={`/products?category=${item.id}`}
                                className={s.categories__card__link}
                            >
                                See items
                            </Link>
                        </Button>
                    }
                />
            ))}
        </div>
    );
});

export default Content;
