import React from 'react';
import { useLocalStore } from '@/store/LocalStore';
import { useRootStore } from '@/store/RootStore';
import UsersStore from '@/store/UsersStore/UsersStore.ts';
import { UsersStoreContext } from '@/store/UsersStore/context/UsersStoreContext.ts';

export const UsersStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const rootStore = useRootStore();
    const store = useLocalStore(() => new UsersStore(rootStore));

    return (
        <UsersStoreContext.Provider value={store}>
            {children}
        </UsersStoreContext.Provider>
    );
};

export default UsersStoreProvider;
