import axios from 'axios';
import * as action from '../constants/productConstant';

const url = 'http://localhost:5000';

export const getProducts = () => async (dispatch) =>{
    try {
        const {data} = await axios.get(`${url}/products`)
        console.log(data);
        dispatch({type: action.GET_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        console.error(error);
    }
}