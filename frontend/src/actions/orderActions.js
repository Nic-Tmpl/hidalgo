import { ORDER_FAIL, ORDER_REQUEST, ORDER_SUCCESS,} from "../constants/orderConstants"
import axios from 'axios';

const getOrderById= (orderId) =>  async (dispatch) => {
    try {
        dispatch({ type: ORDER_REQUEST, payload: productId });
        const { data } = await axios.get(`/orders/${orderId}`, {
            user_id: userId
        });
        dispatch({type: ORDER_SUCCESS, payload: data});
    } 
    catch(error) {
        dispatch({ type: ORDER_FAIL, payload: error.message});
    }
}

export { getOrderById };