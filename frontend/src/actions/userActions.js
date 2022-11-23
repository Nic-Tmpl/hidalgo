import axios from 'axios';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from '../constants/userConstants';


const login = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try {
        //currently not destructuring data as I am uncertain how much info is needed in state.
        const { data } = await axios.post("/login/password", { username: email, password: password });
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
    } catch (error) {
       dispatch({ type: USER_SIGNIN_FAIL, payload: error.message }); 
    }
}

const signup = (email, password, firstName, lastName) => async (dispatch) => {
    dispatch({type: USER_SIGNUP_REQUEST, payload: {email, password, firstName, lastName}});
    try {
        // not destructuring data here as well, for the same reason.
        const { data } = await axios.post("signup", {
            email: email, 
            password: password,
            first_name: firstName,
            last_name: lastName,
         });
         dispatch({type: USER_SIGNUP_SUCCESS, payload: data});
    } catch (error) {
        dispatch({ type: USER_SIGNUP_FAIL, payload: error.message});
    }
}

export { login, signup };
