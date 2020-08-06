import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { verify, logout } from '../account/actions/account_actions';
import { getAll } from './actions/profile_actions';

import Nav from '../navbar/Nav';
import Forbidden from '../403/Forbidden';

import { StyledProfile } from './styles';

const Profile = ({
  authorized,
  token,
  userID,
  user,
  favorites,
  verify,
  getAll,
}) => {
  useEffect(() => {
    if (!authorized && token) {
      verify(token);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, authorized]);

  useEffect(() => {
    if ((!favorites || !favorites.length) && userID) {
      getAll(userID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites.length, userID]);

  if (authorized === true) {
    return (
      <React.Fragment>
        <Nav />
        <StyledProfile>
          <h1 className='heading'>
            Hi{' '}
            {user && user.name
              ? user.name[0].toUpperCase() + user.name.slice(1) + '!'
              : 'there!'}
          </h1>

          <div className='control'>
            <div className='grid'>
              {favorites
                ? favorites.map((favorite, idx) => {
                    return (
                      <div key={`fave-${idx}`} className='grid__div'>
                        <div
                          className='grid__img'
                          style={{
                            backgroundImage: `url(${favorite.photo})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 25%',
                          }}
                        ></div>
                        <p className='grid__p'>{favorite.name}</p>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </StyledProfile>
      </React.Fragment>
    );
  }

  return <Forbidden />;
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
    authorized: state.auth.authorized,
    token: state.auth.token,
    user: state.auth.user,
    userID: state.auth.userID,
    favorites: state.profile.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verify: (token) => dispatch(verify(token)),
    getAll: (id) => dispatch(getAll(id)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
