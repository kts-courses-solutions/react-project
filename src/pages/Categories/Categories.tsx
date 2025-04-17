import CategoriesStoreProvider from '@/store/CategoriesStore/context/CategoriesStoreProvider.tsx';
import Headline from './components/Headline/Headline.tsx';
import Content from './components/Content/Content.tsx';

const Categories = () => (
    <CategoriesStoreProvider>
        <Headline />
        <Content />
    </CategoriesStoreProvider>
);

export default Categories;
