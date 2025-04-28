import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { memo } from 'react';
import s from './pagination.module.scss';
import { ArrowRightIcon } from '@/components/ui/Icons/ArrowRightIcon';
import { useProductsPageStore } from '@/store/ProductsPageStore';
import { observer } from 'mobx-react-lite';

const Pagination = observer(() => {
    const store = useProductsPageStore();
    const pagination = store.pagination;

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const buildLink = (page: number) => {
        if (pagination) {
            const params = new URLSearchParams(searchParams.toString());

            // Remove old offset and limit
            params.delete('offset');
            params.delete('limit');

            const offset = (page - 1) * pagination.limit;
            const limit = pagination.limit;

            params.set('offset', offset.toString());
            params.set('limit', limit.toString());

            return `/products?${params.toString()}`;
        }

        return '';
    };

    if (!pagination) return;

    return (
        <div className={s.pagination}>
            {pagination.hasPrevPage ? (
                <Link
                    to={buildLink(pagination.currentPage - 1)}
                    className={s.pagination__arrowLeft}
                >
                    <ArrowRightIcon />
                </Link>
            ) : (
                <div className={s.pagination__arrowLeft}>
                    <ArrowRightIcon />
                </div>
            )}

            {pagination.visiblePages.map((page, index) =>
                page === null ? (
                    <div
                        key={`ellipsis-${index}`}
                        className={s.pagination__btn}
                    >
                        ...
                    </div>
                ) : (
                    <Link
                        key={`page-${page}`}
                        to={buildLink(page)}
                        className={clsx(
                            s.pagination__btn,
                            page === pagination.currentPage &&
                                s.pagination__btn_active,
                        )}
                    >
                        {page}
                    </Link>
                ),
            )}

            {pagination.hasNextPage ? (
                <Link
                    to={buildLink(pagination.currentPage + 1)}
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

export default memo(Pagination);
