import * as actionType from '../constants/productConstant';

export const getProductReducer = (state= {products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return {
                products:action.payload
            }
        case actionType.GET_PRODUCTS_FAIL:
            return {
                error: action.payload
            }
        default:
            return state;
    }
};