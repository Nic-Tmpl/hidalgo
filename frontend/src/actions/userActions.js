import axios from 'axios';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';


const login = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try {
        const result = await axios.post("/login", {email: email, password: password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: result});
    } catch (error) {
       dispatch({ type: USER_SIGNIN_FAIL, payload: error.message }); 
    }
}

export { login };
