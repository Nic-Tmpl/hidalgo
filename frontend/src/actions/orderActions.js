import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_HISTORY_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS } from '../constants/orderConstants';
import axios from 'axios';

const makeOrder = (userId, cartTotal, cartItems ) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST });
        const results = await axios.post(`/orders`, { user_id: userId, total: cartTotal }).then(async results =>
            {
                const { data } = results;
                const orderItems = await axios.post(`/orders/orderItems`, { orderId: data[0].id, cartItems: cartItems });
                dispatch({ type: CREATE_ORDER_SUCCESS, payload: orderItems });
            })
    }
    catch (error) {
        dispatch ({ type:CREATE_ORDER_FAIL, payload: error.message});
    }
}

const listOrders = (userId) =>  async (dispatch) => {
    try{
        dispatch({ type: ORDER_HISTORY_REQUEST, payload: userId}); 
        const { data } = await axios.get(`/orders`, { id: userId });
        dispatch({ type: ORDER_HISTORY_SUCCESS, payload: data });
    }
    catch(error) {
        dispatch({ type: ORDER_HISTORY_FAIL, payload: error.message});
    }
}

const detailsOrder = (orderId, userId) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST, payload: {orderId, userId }});
        const { data } = await axios.get(`/orders/${orderId}`, { user_id: userId });
        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data});
    } 
    catch(error) {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message});
    }
}

export { makeOrder, listOrders, detailsOrder };