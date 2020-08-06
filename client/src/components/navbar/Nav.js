import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo } from '../../global/logo';
import { Navbar, Account } from './styles';

const Nav = (props) => {
  return (
    <Navbar>
      <Link to='/' className='link'>
        <Logo>yelp•ish</Logo>
      </Link>
      {!props.loggedIn ? (
        <Account>
          <Link to='/account' className='link'>
            Login or Register
          </Link>
        </Account>
      ) : (
        <Account>
          <Link to='/profile' className='link link--mr'>
            Account
          </Link>
          <a href='/' className='link' onClick={props.logout}>
            Log out
          </a>
        </Account>
      )}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, null)(Nav);
