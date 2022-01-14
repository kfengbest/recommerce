import React, {useContext, useReducer, useEffect} from "react";

const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {

    const filters = {
        searchText: "",
        category: "",
        company: ""
    };

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
            filters,
            updateFilters
        }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}