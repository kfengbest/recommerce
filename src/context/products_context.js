import React from 'react';
import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS } from '../actions';
import products_reducer from '../reducers/products_reducer';

const products_initial_state = {
    products : [],
    products_loading: false
}

const ProductsContext = React.createContext();

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(products_reducer, products_initial_state);

    const fetchProducts = async (url) => {
        
        dispatch({type: GET_PRODUCTS_BEGIN})
        
        let prods = [        {
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
        }];

        dispatch({type: GET_PRODUCTS_SUCCESS, payload: prods})
    }

    React.useEffect(() => {
        fetchProducts("url");
    }, []);

    return (
        <ProductsContext.Provider value={{...state}}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductsContext = () => {
    return React.useContext(ProductsContext);
}