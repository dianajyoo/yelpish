const initialState = {
  loading: null,
  success: null,
  loggedIn: null,
  authorized: null,
  userID: null,
  user: {},
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOADING':
      return {
        ...state,
        loading: action.loading,
      };
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        success: action.success,
      };
    case 'REQUEST_FAILURE':
      return {
        ...state,
        success: action.success,
        error: action.error,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        loggedIn: action.loggedIn,
        token: action.token,
        user: action.user,
      };
    case 'REGISTER_USER':
      return {
        ...state,
        loggedIn: action.loggedIn,
        token: action.token,
        user: action.user,
      };
    case 'VERIFY_USER':
      return {
        ...state,
        authorized: action.authorized,
        userID: action.userID,
      };
    case 'RESET_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        loading: null,
        success: null,
        loggedIn: null,
        authorized: null,
        userID: null,
        user: {},
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
