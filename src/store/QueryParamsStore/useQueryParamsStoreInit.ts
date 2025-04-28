import { useEffect } from 'react';
import { useRootStore } from '@/store/RootStore';
import { useSearchParams } from 'react-router-dom';

const useQueryParamsStoreInit = (): void => {
    const rootStore = useRootStore();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        rootStore.query.setSearch(searchParams);
    }, [searchParams, rootStore]);
};

export default useQueryParamsStoreInit;
