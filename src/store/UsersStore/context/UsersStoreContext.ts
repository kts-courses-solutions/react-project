import { createContext, useContext } from 'react';
import UsersStore from '@/store/UsersStore/UsersStore.ts';

export const UsersStoreContext = createContext<UsersStore | null>(null);

const useUsersStore = (): UsersStore => {
    const store = useContext(UsersStoreContext);
    if (!store)
        throw new Error('useUsersStore must be used inside its provider');
    return store;
};

export default useUsersStore;
