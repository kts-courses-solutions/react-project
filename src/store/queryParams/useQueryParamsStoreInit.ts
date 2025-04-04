import { useLocation } from 'react-router';
import rootStore from '@/store/root/instance.ts';

export const useQueryParamsStoreInit = (): void => {
    const { search } = useLocation();
    rootStore.query.setSearch(search);
};
