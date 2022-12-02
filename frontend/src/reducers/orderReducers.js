import { ORDER_FAIL, ORDER_REQUEST, ORDER_SUCCESS } from "../constants/orderConstants"


const orderReducer = (state=[], action) => {
    switch (action.type) {
        case ORDER_REQUEST: 
            return { loading: true };
        case ORDER_SUCCESS:
            return { loading: false, orderInfo: action.payload };
        case ORDER_FAIL:
            return { loading: false, error: action.payload };
        default: 
            return state;
    }
}

export { orderReducer };