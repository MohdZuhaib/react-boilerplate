import authActions from '../constants/auth';

const initialState = {
    loading: {
        status: false,
        action: ''
    },
    error: ''
};

const authReducer = (state = initialState, { action, payload } = {}) => {
    switch (action) {
        case authActions.LOGIN:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    status: true,
                    action: 'logging_in'
                }
            };

        case authActions.LOGIN_SUCCESS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    status: false,
                    action: ''
                }
            };

        case authActions.LOGIN_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    status: false,
                    action: ''
                },
                error: payload.error
            };

        default:
            return state;
    }
};

export default authReducer;
