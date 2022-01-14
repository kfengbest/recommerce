import React, {useContext, useReducer, useEffect} from "react";

const FilterContext = React.createContext();

const filterInitialState = {
    all_products: [],
    filtered_products: [
        {
            id: 1,
            name: "kitchen",
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
    ],
    view: "grid",
    sort: "price-lowest",
    filters : {
        searchText: "",
        category: "all",
        company: "all",
        color: "all",
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    }
}

export const FilterProvider = ({children}) => {

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name === "category") {
            value = e.target.textContent;
        }
        console.log("FilterProvider.updateFilters", name, value);
    }

    return (
        <FilterContext.Provider value = {{
            ...filterInitialState,
            updateFilters
        }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}