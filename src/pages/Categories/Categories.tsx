import CategoriesStoreProvider from '@/store/CategoriesStore/context/CategoriesStoreProvider.tsx';
import { Headline } from './components/Headline';
import { Content } from './components/Content';

const Categories = () => (
    <CategoriesStoreProvider>
        <Headline />
        <Content />
    </CategoriesStoreProvider>
);

export default Categories;
