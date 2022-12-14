import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_HISTORY_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS } from '../constants/orderConstants';
import axios from 'axios';
import { API_URL } from '../constants/urlConstants';

const makeOrder = (userId, cartTotal, cartItems ) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST });
        const results = await axios.post(`${API_URL}/orders`, { user_id: userId, total: cartTotal }).then(async results =>
            {
                const { data } = results;
                const orderItems = await axios.post(`${API_URL}/orders/orderItems`, { orderId: data[0].id, cartItems: cartItems });
                dispatch({ type: CREATE_ORDER_SUCCESS });
            })
    }
    catch (error) {
        dispatch ({ type:CREATE_ORDER_FAIL, payload: error.message});
    }
}

const listOrders = (userId) =>  async (dispatch) => {
    try{
        dispatch({ type: ORDER_HISTORY_REQUEST }); 
        const { data } = await axios.get(`${API_URL}/orders`, {params : { id : userId }});
        console.log(data);
        dispatch({ type: ORDER_HISTORY_SUCCESS, payload: data });
    }
    catch(error) {
        dispatch({ type: ORDER_HISTORY_FAIL, payload: error.message});
    }
}

const detailsOrder = (orderId, userId) => async (dispatch) => {
    try {
        const params = {user_id: userId, order_id: orderId};
        dispatch({ type: ORDER_DETAILS_REQUEST, payload: params });
        const { data } = await axios.get(`${API_URL}/orders/details`, { params : params });
        console.log(data);
        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data});
    } 
    catch(error) {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message});
    }
}

export { makeOrder, listOrders, detailsOrder };