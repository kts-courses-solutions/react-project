import { ProductsPageStoreProvider } from '@/store/ProductsPageStore';
import { Search } from './components/Search';
import { Content } from './components/Content';
import { Pagination } from './components/Pagination';
import { Headline } from '@/components/shared/Headline';

const Products = () => (
    <ProductsPageStoreProvider>
        <Headline
            title="Products"
            subtitle="We display products based on the latest products we have, if you
                want to see our old products please enter the name of the item"
        />
        <Search />
        <Content />
        <Pagination />
    </ProductsPageStoreProvider>
);

export default Products;
