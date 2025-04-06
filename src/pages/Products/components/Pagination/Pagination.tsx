import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import clsx from 'clsx';
import { PaginationInfo } from '@/utils/pagination.ts';
import { memo } from 'react';
import s from './Pagination.module.scss';

interface PaginationProps {
    pagination: PaginationInfo | null;
}

const Pagination = ({ pagination }: PaginationProps) => {
    if (pagination === null) {
        return null;
    }

    return (
        <div className={s.pagination}>
            {pagination.hasPrevPage ? (
                <Link
                    to={`/products?page=${pagination.currentPage - 1}`}
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
                        to={`/products?page=${page}`}
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
                    to={`/products?page=${pagination.currentPage + 1}`}
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
};

export default memo(Pagination);
