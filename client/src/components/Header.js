import React from 'react';
import { Link } from 'react-router-dom';
import login from '../images/user-login.png';
import logout from '../images/user-logout.png';
import account from '../images/account.png';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100vw;
  height: 2vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.5px solid #D1D7E0;
  font: bold 1.25rem Lato, sans-serif;
  color: #F76C6C;
  z-index: 1000;

  .title {
    text-decoration: none;
    color: #F76C6C;

    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  }

  .account {
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .control {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #F76C6C;

    p {
      cursor: pointer;
    }
  }

  .glyph {
    width: 30%;
    height: 30%;
    margin-right: 1rem;
    font-size: 5rem;
  }
`

const Header = ({ loggedIn, handleLogout }) => {
  return (
    <StyledHeader>
      <Link to='/' className='title'><h1>yelpish</h1></Link>
      {!loggedIn ? (
        <div className='account'>
          <Link className='control' to='/account'>
            <img src={login} className='glyph' alt='login' />
            <p>sign in/register</p>
          </Link>
        </div>
      ) : (
        <div className='account'>
          <Link className='control' to='/profile'>
            <img src={account} className='glyph' alt='my account' />
            <p>my account</p>
          </Link>
          <Link className='control' to='/' onClick={handleLogout}>
            <img src={logout} className='glyph' alt='logout' />
            <p>sign out</p>
          </Link>
        </div>
      )}
    </StyledHeader>
  );
}

export default Header;