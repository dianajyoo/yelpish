import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { logout } from './store/actionCreators/authAction';
import { addFavorites, resetFavoritesAfterLogout } from './store/actionCreators/profileAction';

import SearchContainer from './containers/SearchContainer';
import RestaurantContainer from './containers/RestaurantContainer';
import AccountContainer from './containers/AccountContainer';
import ProfileContainer from './containers/ProfileContainer';
import './App.css';

class App extends React.Component {
  handleLogout = () => {
    const { logout, resetFavoritesAfterLogout } = this.props;

    // we reset all states once user logs out
    logout();
    resetFavoritesAfterLogout();
  }

  addToFavorites = (e) => {
    const { addFavorites, loggedIn } = this.props;
    const name = e.target.dataset.name;
    const photo = e.target.dataset.photo;
    const restaurant_id = e.target.dataset.id;
    const user_id = localStorage.getItem('id');

    // update favorites state with new set of favorites if logged in
    if (loggedIn === true) {
      addFavorites(name, photo, restaurant_id, user_id);
      alert('Restaurant liked!');
    } else {
      alert('Please sign in before liking!');
    }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' render={(props) => <SearchContainer {...props} />} />
            <Route
              exact path='/search'
              render={(props) => (
                <RestaurantContainer
                  {...props}
                  handleLogout={this.handleLogout}
                  like={this.addToFavorites}
                />
              )}
            />
            <Route
              exact path='/account'
              render={(props) => (
                <AccountContainer {...props} handleLogout={this.handleLogout} />
              )}
            />
            <Route
              exact path='/profile'
              render={(props) => (
                <ProfileContainer
                  {...props}
                  handleLogout={this.handleLogout}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    addFavorites: (name, photo, restaurant_id, user_id) => dispatch(addFavorites(name, photo, restaurant_id, user_id)),
    resetFavoritesAfterLogout: () => dispatch(resetFavoritesAfterLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
