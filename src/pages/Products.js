import * as React from 'react';
import GridView from '../components/GridView';

const productslist = [
    {
        id: 1,
        name: "arm",
        price: "$123",
        imageUrl: ""
    },
    {
        id: 2,
        name: "chair",
        price: "$87",
        imageUrl: ""
    },
    {
        id: 3,
        name: "desk",
        price: "$56",
        imageUrl: ""
    },
    {
        id: 4,
        name: "room",
        price: "$23",
        imageUrl: ""
    }
];
function Products() {
    return (
        <>
            <main>
                <h2>Product page</h2>
                <p>this is Product page content</p>
                <GridView products={productslist} />
            </main>
        </>
    );
}

export default Products;