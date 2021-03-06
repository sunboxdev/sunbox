import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS
} from '../actions/auth'

export default (
    state = {
        isLoggingIn: false,
        isRegisterIn: false,
        isLoggingOut: false,
        isVerifying: false,
        loginError: false,
        registerError: false,
        logoutError: false,
        isAuthenticated: false,
        user: {}
    },
    action: any
) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user
            };
        case REGISTER_REQUEST:
            return {
                ...state,
                isRegisterIn: true,
                registerError: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegisterIn: false,
                isAuthenticated: true,
                user: action.user
            };

        case REGISTER_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                registerError: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                logoutError: false
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                user: {}
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: true
            };
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
            };
        default:
            return state;
    }
}