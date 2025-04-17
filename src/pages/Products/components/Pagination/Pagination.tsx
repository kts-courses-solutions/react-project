import { Link, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import s from './Pagination.module.scss';
import { observer } from 'mobx-react-lite';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { ArrowRightIcon } from '@/components/ui/Icons/ArrowRightIcon';

const Pagination = observer(() => {
    const store = useProductsPageStore();
    const [searchParams] = useSearchParams();

    const limit = store.limit;
    const offset = store.offset;

    const createOffsetLink = (newOffset: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('offset', newOffset.toString());
        params.set('limit', limit.toString());
        return `/products?${params.toString()}`;
    };

    const currentPage = Math.floor(offset / limit) + 1;

    return (
        <div className={s.pagination}>
            {offset >= limit ? (
                <Link
                    to={createOffsetLink(offset - limit)}
                    className={s.pagination__arrowLeft}
                >
                    <ArrowRightIcon />
                </Link>
            ) : (
                <div className={s.pagination__arrowLeft}>
                    <ArrowRightIcon />
                </div>
            )}

            <div className={clsx(s.pagination__btn, s.pagination__btn_active)}>
                {currentPage}
            </div>

            {store.hasMore ? (
                <Link
                    to={createOffsetLink(offset + limit)}
                    className={s.pagination__arrowRight}
                >
                    <ArrowRightIcon />
                </Link>
            ) : (
                <div className={s.pagination__arrowRight}>
                    <ArrowRightIcon />
                </div>
            )}
        </div>
    );
});

export default Pagination;
