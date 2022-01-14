import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS
} from '../actions'

const products_reducer = (state, action) => {
    switch(action.type) {
        case GET_PRODUCTS_SUCCESS : {
            return {...state,
                    products: action.payload
                };
        }
        case GET_PRODUCTS_BEGIN : {
            return {...state,
                    products_loading: true
                };
        }
        default: {
            return state;
        }
    }
}

export default products_reducer;