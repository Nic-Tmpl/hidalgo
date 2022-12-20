import { CART_ADD_ITEM, CART_DELETE_ALL, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from '../constants/cartConstants';
import axios from 'axios';
import { LOCAL_API_URL } from '../constants/urlConstants';

const addToCart = (productId, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${LOCAL_API_URL}/products/${productId}`);
        dispatch({ type: CART_ADD_ITEM, payload: {
            product: data,
            quantity: quantity
        }
    });
    }
    catch (error) {

    }
}

const removeFromCart = (productId) => async (dispatch) => {
    try {
        dispatch({ type: CART_REMOVE_ITEM, payload: productId});
    }
    catch (error) {

    }
}

const saveShipping = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload: data});
}

const savePayment = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload: data});
}

const clearCart = () => (dispatch) => {
    dispatch({ type: CART_DELETE_ALL});
}


export { addToCart, removeFromCart, saveShipping, savePayment, clearCart };