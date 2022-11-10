import { CART_ADD_ITEM } from '../constants/cartConstants';
import axios from 'axios';

const addToCart = (productId, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/products/${productId}`);
        dispatch({ type: CART_ADD_ITEM, payload: {
            product: data,
            quantity: quantity
        }
    });
    }
    catch (error) {

    }
}

export { addToCart };