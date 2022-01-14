import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";

const ProductList = () => {
    const {filtered_products} = useFilterContext();

    if(filtered_products.length < 1) {
        return (
            <h2>Sorry, no products yet...</h2>
        )
    }

    return <GridView products={filtered_products}/>
}

export default ProductList;