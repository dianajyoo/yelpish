import React from 'react';
import { connect } from 'react-redux';
import { verify, logout } from '../store/actionCreators/authAction';
import { getFavorites } from '../store/actionCreators/profileAction';
import Profile from '../components/Profile';
import Header from '../components/Header';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { getFavorites } = this.props;

    const { verify } = this.props;
    const token = localStorage.getItem('token');

    if (token !== null) {
      verify(token);

      // fetch favorites even after page refresh
      getFavorites();
    }
  }

  componentDidUpdate(prevProps) {
    const { verify, token, user, getFavorites, favorites } = this.props;

    // verify logged in user by passing token
    if(prevProps.token !== token) {
      verify(token);
    }

    // when user state updates, re-render component
    // and fetch favorites upon logging in
    if(prevProps.user !== user) {
      getFavorites();
    }

    // when user likes a new restaurant, fetch updated favorites
    if(prevProps.favorites.length !== favorites.length) {
      getFavorites();
    }
  }

  render() {
    const { user, loggedIn, favorites, handleLogout } = this.props;

    return (
      <React.Fragment>
        <Header loggedIn={loggedIn} handleLogout={handleLogout} />
        {loggedIn ? (
          <Profile
            user={user}
            loggedIn={loggedIn}
            favorites={favorites}
          />
        ) : (
          <div>null</div>
        )}
      </React.Fragment>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loggedIn: state.auth.loggedIn,
    token: state.auth.token,
    favorites: state.profile.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verify: (token) => dispatch(verify(token)),
    logout: () => dispatch(logout()),
    getFavorites: () => dispatch(getFavorites())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);