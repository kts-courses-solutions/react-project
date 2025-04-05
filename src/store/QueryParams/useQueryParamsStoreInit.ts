import { useLocation } from 'react-router';
import { useRootStore } from '@/store/root/context/RootStoreContext.tsx';
import { useEffect } from 'react';

export const useQueryParamsStoreInit = (): void => {
    const rootStore = useRootStore();
    const { search } = useLocation();

    useEffect(() => {
        rootStore.query.setSearch(search);
    }, [search, rootStore]);
};
