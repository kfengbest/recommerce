import {
    UPDATE_FILTERS,
    SETVIEW,
    FILTER_PRODUCTS
} from '../actions'

const filter_reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_FILTERS : {
            const {name, value} = action.payload;
            return {...state, filters : {...state.filters, [name] : value}};
        }
        case FILTER_PRODUCTS : {
            const {all_products} = state;
            const {searchText, category, company, color, price, shipping} = state.filters;

            let tempProducts = [...all_products];
            if(category !== "all") {
                tempProducts = tempProducts.filter( p => p.name === category);
            }
            return {...state, filtered_products : tempProducts};
        }
        case SETVIEW : {
            return {...state, view : action.payload};
        }
        default : {
            return state;
        }
    }
}

export default filter_reducer;