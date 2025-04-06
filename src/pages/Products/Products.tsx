import Pagination from '@/pages/Products/components/Pagination/Pagination.tsx';
import Headline from './components/Headline/Headline.tsx';
import Search from './components/Search/Search.tsx';
import ProductsPageStoreProvider from '@/store/ProductsPage/context/ProductsPageStoreProvider.tsx';
import Content from '@/pages/Products/components/Content/Content.tsx';

const Products = () => (
    <ProductsPageStoreProvider>
        <Headline />
        <Search />
        <Content />
        <Pagination />
    </ProductsPageStoreProvider>
);

export default Products;
