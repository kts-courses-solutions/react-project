import { createContext, useContext } from 'react';
import lalasiaStore from '@/store/lalasia.ts';

export const StoreContext = createContext({
    lalasiaStore,
});

export const useStores = () => useContext(StoreContext);
export default useStores;
