export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    visiblePages: (number | null)[];
}

export function getPagination(
    totalItems: number,
    itemsPerPage: number = 9,
    currentPage: number = 1,
    maxVisiblePages: number = 5,
): PaginationInfo {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    const hasPrevPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;

    let visiblePages: (number | null)[] = [];

    if (totalPages <= maxVisiblePages) {
        visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
        const sidePages = Math.floor((maxVisiblePages - 3) / 2);
        visiblePages.push(1);

        let startPage = Math.max(2, currentPage - sidePages);

        if (startPage > 2) {
            visiblePages.push(null); // "..."
        }
        let endPage = Math.min(totalPages - 1, currentPage + sidePages);

        if (currentPage - sidePages < 2) {
            endPage = Math.min(totalPages - 1, maxVisiblePages - 2);
        }

        if (currentPage + sidePages > totalPages - 1) {
            startPage = Math.max(2, totalPages - maxVisiblePages + 2);
        }

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }

        if (endPage < totalPages - 1) {
            visiblePages.push(null); // "..."
        }

        if (totalPages > 1) {
            visiblePages.push(totalPages);
        }
    }

    return {
        currentPage,
        totalPages,
        hasNextPage,
        hasPrevPage,
        visiblePages,
    };
}
