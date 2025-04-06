import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useRootStore } from '@/store/RootStore';

const useQueryParamsStoreInit = (): void => {
    const rootStore = useRootStore();
    const { search } = useLocation();

    useEffect(() => {
        rootStore.query.setSearch(search);
    }, [search, rootStore]);
};

export default useQueryParamsStoreInit;
