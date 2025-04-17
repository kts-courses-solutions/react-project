import { ProductsPageStoreProvider } from '@/store/ProductsPageStore';
import { Headline } from './components/Headline';
import { Search } from './components/Search';
import { Content } from './components/Content';
import { Pagination } from './components/Pagination';

const Products = () => (
    <ProductsPageStoreProvider>
        <Headline />
        <Search />
        <Content />
        <Pagination />
    </ProductsPageStoreProvider>
);

export default Products;
