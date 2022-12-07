import { configureStore  } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducers';
import { makeOrderReducer, orderDetailsReducer, orderListReducer } from './reducers/orderReducers';
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer } from './reducers/productReducers';
import { userEditReducer, userLoginReducer, userSignupReducer } from './reducers/userReducers';

const reducer = {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    userEdit: userEditReducer,
    makeOrder: makeOrderReducer,
    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,
}

const store = configureStore({
    reducer,
});

export default store;