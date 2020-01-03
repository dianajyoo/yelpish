const initialState = {
  loggedIn: localStorage.getItem('loggedIn'),
  user: localStorage.getItem('user'),
  token: localStorage.getItem('token')
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        loggedIn: action.loggedIn,
        token: action.token
      };
    case 'REGISTER_USER':
      return {
        ...state,
        loggedIn: action.loggedIn,
        token: action.token
      };
    case 'VERIFY_USER':
      return {
        ...state,
        user: action.user,
        loggedIn: action.loggedIn
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        loggedIn: action.loggedIn
      };
    default:
      return state;
  }
};

export default authReducer;