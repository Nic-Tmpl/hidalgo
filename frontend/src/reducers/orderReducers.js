import { ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_HISTORY_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS, } from "../constants/orderConstants";


const orderListReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case ORDER_HISTORY_REQUEST: 
         return { loading: true };
        case ORDER_HISTORY_SUCCESS: 
            return { loading: false, orders: action.payload };
        case ORDER_HISTORY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;   
    }
}

const orderDetailsReducer = (state = { order: {}}, action) => {
    switch(action.type) {
        case ORDER_DETAILS_REQUEST:
            return { loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload};
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}
export { orderListReducer, orderDetailsReducer};