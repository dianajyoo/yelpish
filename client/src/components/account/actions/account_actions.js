import axios from 'axios';

export const load = (loading) => {
  return {
    type: 'REQUEST_LOADING',
    loading,
  };
};

export const success = (success) => {
  return {
    type: 'REQUEST_SUCCESS',
    success,
  };
};

export const failure = (success, error) => {
  return {
    type: 'REQUEST_FAILURE',
    success,
    error,
  };
};

export const loginUser = (loggedIn, token, user) => {
  return {
    type: 'LOGIN_USER',
    loggedIn,
    token,
    user,
  };
};

export const registerUser = (loggedIn, token, user) => {
  return {
    type: 'REGISTER_USER',
    loggedIn,
    token,
    user,
  };
};

export const verifyUser = (authorized, userID) => {
  return {
    type: 'VERIFY_USER',
    authorized,
    userID,
  };
};

export const resetError = () => {
  return {
    type: 'RESET_ERROR',
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    console.log('Logging in...');
    // const URL = 'https://yelpish-backend.herokuapp.com/api/auth/login';
    const url = 'http://localhost:3000/api/auth/login';
    const data = { username, password };

    axios({
      url,
      method: 'POST',
      data,
      withCredentials: true,
    })
      .then((resp) => {
        dispatch(load(true));

        if (resp.data && resp.data.success) {
          const { success, token, user } = resp.data;
          dispatch(loginUser(success, token, user));
        }
      })
      .then(() => dispatch(load(false)))
      .then(() => dispatch(success(true)))
      .catch((err) => dispatch(failure(false, err.response.data)));
  };
};

export const register = (name, username, password) => {
  return async (dispatch) => {
    console.log('Registering...');
    const url = 'http://localhost:3000/api/auth/register';
    const data = { name, username, password };
    // const URL = 'https://yelpish-backend.herokuapp.com/api/auth/register';

    axios({
      url,
      method: 'POST',
      data,
      withCredentials: true,
    })
      .then((resp) => {
        dispatch(load(true));

        if (resp.data && resp.data.success) {
          const { success, token, user } = resp.data;
          dispatch(registerUser(success, token, user));
        }
      })
      .then(() => dispatch(load(false)))
      .then(() => dispatch(success(true)))
      .catch((err) => dispatch(failure(false, err.response.data)));
  };
};

export const verify = (token) => {
  return async (dispatch) => {
    console.log('Verifying...');
    // const URL = 'https://yelpish-backend.herokuapp.com/api/auth/verify';
    const URL = 'http://localhost:3000/api/auth/verify';

    axios
      .get(URL, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        dispatch(load(true));

        if (resp.data && resp.data.success) {
          const { success, userID } = resp.data;
          dispatch(verifyUser(success, userID));
        }
      })
      .then(() => dispatch(load(false)))
      .catch(console.log);
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutUser(false, null, {}));
  };
};
