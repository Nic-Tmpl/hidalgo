import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_HISTORY_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS, } from "../constants/orderConstants";

const makeOrderReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_ORDER_REQUEST:
            return { loading: true };
        case CREATE_ORDER_SUCCESS:
            return { loading: false, orderItems: action.payload };
        case CREATE_ORDER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

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
export { makeOrderReducer, orderListReducer, orderDetailsReducer};