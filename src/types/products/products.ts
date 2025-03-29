export interface Product {
    id: null;
    title: string;
    slug: string;
    price: null;
    description: string;
    category: {
        id: number;
        name: string;
        slug: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
    images: string[];
    creationAt: string;
    updatedAt: string;
}
