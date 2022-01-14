import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
    const {filtered_products, view} = useFilterContext();

    if(filtered_products.length < 1) {
        return (
            <h2>Sorry, no products yet...</h2>
        )
    }
    if(view === "grid") {
        return <GridView products={filtered_products}/>
    }

    return <ListView products={filtered_products}/>
}

export default ProductList;