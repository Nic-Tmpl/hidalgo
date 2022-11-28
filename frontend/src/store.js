import { configureStore  } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { userLoginReducer, userSignupReducer } from './reducers/userReducers';

const reducer = {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
}

const store = configureStore({
    reducer,
});

export default store;