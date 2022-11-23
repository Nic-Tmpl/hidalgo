import "../constants/userConstants"


const userLoginReducer = (state={}, action) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload};
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload};
        default: return state;
    }
}

const userSignupReducer = (state={}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {loading: true};
        case USER_SIGNUP_SUCCESS:
            return { loading: false, userInfo: action.payload};
        case USER_SIGNUP_FAIL:
            return {loading: false, error: action.payload};
        default: return state;
    }
}

export { userLoginReducer, userSignupReducer };