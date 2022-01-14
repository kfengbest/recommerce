import * as React from 'react';
import styled from "styled-components";
import GridView from '../components/GridView';
import Filters from '../components/Filters';

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
            <Wrapper>
                <div className="section-center products">
                    <Filters />
                    <GridView products={productslist} />
                </div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    .products {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
    }
    @media (min-width: 550px) {
        .products {
        grid-template-columns: 200px 1fr;
        }
    }
`;

export default Products;