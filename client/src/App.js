import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { reset } from './components/profile/actions/profile_actions';
import { logout } from './components/account/actions/account_actions';

import Landing from './components/landing/landing_container';
import Search from './components/search/search_container';
import Account from './components/account/account_container';
import Profile from './components/profile/profile_container';
import Loader from './components/loader/loader';

import './App.css';

const App = (props) => {
  const logoutUser = () => {
    const { logout, reset } = props;

    // We reset all states once user logs out
    reset();
    logout();
  };

  if (props.loading === true) return <Loader />;

  if (!props.loggedIn || props.loading === false)
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={(props) => <Landing {...props} />} />
          <Route
            exact
            path='/search'
            render={(props) => <Search {...props} logout={logoutUser} />}
          />
          <Route
            exact
            path='/account'
            render={(props) => <Account {...props} logout={logoutUser} />}
          />
          <Route
            exact
            path='/profile'
            render={(props) => <Profile {...props} logout={logoutUser} />}
          />
        </Switch>
      </div>
    );
  else return null;
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    success: state.auth.success,
    loggedIn: state.auth.loggedIn,
    authorized: state.auth.authorized,
    token: state.auth.token,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
