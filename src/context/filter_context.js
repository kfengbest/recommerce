import React, {useContext, useReducer, useEffect} from "react";

const FilterContext = React.createContext();

export const FilterProvier = ({children}) => {
 
    const updateFilters = (e) => {
        console.log("FilterProvider.updateFilter");
    }

    return (
        <FilterContext.Provider value = {{
            updateFilters
        }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}