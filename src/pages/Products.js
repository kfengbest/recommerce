import * as React from 'react';
import styled from "styled-components";
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import { useFilterContext } from '../context/filter_context';

function Products() {

    const {filtered_products : pruducts} = useFilterContext();

    return (
        <>
            <Wrapper>
                <div className="section-center products">
                    <Filters />
                    <ProductList />
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