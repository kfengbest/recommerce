import React, {useContext, useReducer, useEffect} from "react";

const FilterContext = React.createContext();

const filterInitialState = {
    all_products: [
        {
            id: 1,
            name: "Kitchen",
            price: "$123",
            imageUrl: ""
        },
        {
            id: 2,
            name: "Office",
            price: "$87",
            imageUrl: ""
        },
        {
            id: 3,
            name: "Kids",
            price: "$56",
            imageUrl: ""
        },
        {
            id: 4,
            name: "Dining",
            price: "$23",
            imageUrl: ""
        }
    ],
    filtered_products: [
        {
            id: 1,
            name: "Kitchen",
            price: "$123",
            imageUrl: ""
        },
        {
            id: 2,
            name: "Office",
            price: "$87",
            imageUrl: ""
        },
        {
            id: 3,
            name: "Kids",
            price: "$56",
            imageUrl: ""
        },
        {
            id: 4,
            name: "Dining",
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

    const [store, setStore] = React.useState(filterInitialState);

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name === "category") {
            value = e.target.textContent;
            if(value !== "All") {
                const filteredProducts = store.all_products.filter( e => e.name === value);
                setStore( preState => {
                    return {...preState, filtered_products: [...filteredProducts]};
                })
            } else {
                const filteredProducts = [...store.all_products];
                setStore( preState => {
                    return {...preState, filtered_products: [...filteredProducts]};
                })
            }
        }

        console.log("FilterProvider.updateFilters", name, value);
    }

    return (
        <FilterContext.Provider value = {{
            ...store,
            updateFilters
        }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}