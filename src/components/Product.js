import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import p1 from "../assets/p1.jpeg";

const Product = ({name, imageUrl, price}) => {

    return (
        <Wrapper>
            <Link to={`/products`}>
                <div className="container">
                    <img src={p1} alt={name}></img>
                </div>
                <footer>
                    <h5>{name}</h5>
                    <p>{price}</p>
                </footer>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    .container {
        position: relative;
        background: var(--clr-black);
        border-radius: var(--radius-rounded);
    }
    img {
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: var(--radius-rounded);
        transition: var(--transition);
    }
`;

export default Product;