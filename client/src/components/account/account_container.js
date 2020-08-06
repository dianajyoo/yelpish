import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { verify, resetError } from './actions/account_actions';
import Nav from '../navbar/Nav';
import Register from '../register/Register';
import Login from '../login/Login';
import Type from './Type';
import Error from '../errors/Error';
import image from '../../images/mae-mu-GnWKTJlMYsQ.jpg';

import { StyledAccount, Wrapper, FormWrapper, Image } from './styles';

const Account = (props) => {
  const [isRegister, setIsRegister] = useState(true);
  const {
    loggedIn,
    authorized,
    loading,
    success,
    token,
    verify,
    error,
    resetError,
    history,
  } = props;

  useEffect(() => {
    if (loggedIn === true && loading === false && success === true && token) {
      verify(token);
    }

    if (authorized === true) {
      history.push('/profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, loading, success, authorized, token]);

  const setAccount = () => {
    setIsRegister(!isRegister);
    resetError();
  };

  return (
    <StyledAccount>
      <Nav />
      <Wrapper>
        <Image src={image} />
        <FormWrapper>
          {isRegister ? (
            <React.Fragment>
              <Register />
              <Type setAccount={setAccount}>Have an account? Log in.</Type>
              <Error>{error}</Error>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Login />
              <Type setAccount={setAccount}>
                Don't have an account? Register.
              </Type>
              <Error>{error}</Error>
            </React.Fragment>
          )}
        </FormWrapper>
      </Wrapper>
    </StyledAccount>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    success: state.auth.success,
    loggedIn: state.auth.loggedIn,
    authorized: state.auth.authorized,
    token: state.auth.token,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verify: (token) => dispatch(verify(token)),
    resetError: () => dispatch(resetError()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Account)
);
