import CategoriesStoreProvider from '@/store/CategoriesStore/context/CategoriesStoreProvider.tsx';
import { Headline } from '@/components/shared/Headline';
import { Content } from './components/Content';

const Categories = () => (
    <CategoriesStoreProvider>
        <Headline
            title="Categories"
            subtitle="We display categories based on the most popular ones."
        />
        <Content />
    </CategoriesStoreProvider>
);

export default Categories;
