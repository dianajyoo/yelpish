import axios from 'axios';

// --> actionCreators <-- //

export const loginUser = (loggedIn, token) => {
  return {
    type: 'LOGIN_USER',
    loggedIn,
    token
  };
};

export const registerUser = (loggedIn, token) => {
  return {
    type: 'REGISTER_USER',
    loggedIn,
    token
  };
};

export const verifyUser = (user, loggedIn) => {
  return {
    type: 'VERIFY_USER',
    user,
    loggedIn
  };
};

export const logoutUser = (loggedIn, user, token) => {
  return {
    type: 'LOGOUT_USER',
    loggedIn,
    user,
    token
  };
};

// --> thunk <-- //

export const login = (username, password) => {
  return (dispatch) => {
    const URL = 'https://yelpish-backend.herokuapp.com/api/auth/login';

    axios({
      method: 'POST',
      url: URL,
      data: {
        username,
        password
      }
    })
    .then(res => {
      const token = res.data.token;
      const loggedIn = res.data.auth;

      localStorage.setItem('token', token);
      localStorage.setItem('loggedIn', loggedIn);

      dispatch(loginUser(loggedIn, token));
    })
    .catch(console.log);
  };
};

export const register = (name, newUsername, newPassword) => {
  return (dispatch) => {
    const URL = 'https://yelpish-backend.herokuapp.com/api/auth/register';

    axios({
      method: 'POST',
      url: URL,
      data: {
        name,
        newUsername,
        newPassword
      }
    })
    .then(res => {
      const token = res.data.token;
      const loggedIn = res.data.auth;

      localStorage.setItem('token', token);
      localStorage.setItem('loggedIn', loggedIn);
      
      dispatch(registerUser(loggedIn, token));
    })
    .catch(console.log);
  };
};

export const verify = (token) => {
  return (dispatch) => {
    const URL = 'https://yelpish-backend.herokuapp.com/api/auth/verify';

    axios({
      method: 'GET',
      url: URL,
      headers: {
        token
      }
    })
    .then(res => {
      localStorage.setItem('user', res.data.username);
      localStorage.setItem('id', res.data._id);

      dispatch(verifyUser(res.data.username, res.data._id.length > 0));
    })
    .catch(console.log);
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();

    // clear state once user logs out
    dispatch(logoutUser(null, null, null));
  };
};
