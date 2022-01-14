import React, {useContext, useReducer, useEffect} from "react";
import { SETVIEW, UPDATE_FILTERS, FILTER_PRODUCTS } from "../actions";
import filter_reducer from '../reducers/filter_reducer';

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

    const [state, dispatch] = React.useReducer(filter_reducer, filterInitialState);

    useEffect(() => {
        dispatch({type: FILTER_PRODUCTS});
    }, [state.filters])

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name === "category") {
            value = e.target.textContent;
        }

        dispatch({type: UPDATE_FILTERS, payload: {name, value}})

        console.log("FilterProvider.updateFilters", name, value);
    }

    const setViewType = (viewType) => {
        dispatch({type: SETVIEW, payload: viewType});
    }

    const updateSort = (sortType) => {

    }

    return (
        <FilterContext.Provider value = {{
            ...state,
            updateFilters,
            setViewType,
            updateSort
        }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}