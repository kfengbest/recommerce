import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import p1 from "../assets/p1.jpeg";

const ListView = ({products}) => {
    return (
        <Wrapper>
            {products.map( p => {
                const {id, imageUrl, name, price } = p;
                return (
                    <article key={id}>
                        <img src={p1} alt="name"></img>
                        <div>
                            <h4>{name}</h4>
                            <h5>{price}</h5>
                            <Link to={"/products"}>Details</Link>
                        </div>
                    </article>
                )
            })}
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: grid;
    row-gap: 3rem;

    img {
        width: 100%;
        display: block;
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: var(--radius-rounded);
        margin-bottom: 1rem;
    }

    @media (min-width: 992px) {
        article {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 2rem;
        align-items: center;
        }
    }
`;

export default ListView;