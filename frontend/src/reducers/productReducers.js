import { PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS } from "../constants/productConstants";

const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST: 
         return { loading: true };
        case  PRODUCT_LIST_SUCCESS: 
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;   
    }
}

const productDetailsReducer = (state = { product: {}}, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}

const productSaveReducer = (state = { product: {}}, action) => {
    switch(action.type) {
        case PRODUCT_SAVE_REQUEST:
            return { loading: true };
        case PRODUCT_SAVE_SUCCESS:
            return { loading: false, success: true,  product: action.payload};
        case PRODUCT_SAVE_FAIL:
            return { loading: false,  error: action.payload};
        default:
            return state;
    }
}

const productDeleteReducer = (state = { product: {}}, action) => {
    switch(action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true, success: false }; //toggle success value between request/success forces useEffect re-render in AdminProductScreen
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, success: true,  product: action.payload};
        case PRODUCT_DELETE_FAIL:
            return { loading: false,  error: action.payload};
        default:
            return state;
    }
}


export { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer};