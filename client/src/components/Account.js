import React from 'react';
import styled from 'styled-components';
import arrow from '../images/arrow.png';

const StyledAccount = styled.div`
  width: 100vw;
  height: 100vh;
  font: 1.25rem Lato, sans-serif;
  color: #0e1111;
  background: #A8D0E6;

  input[id='name'], input[id='username'], input[id='password'], input[id='newUsername'], input[id='newPassword'] {
    margin-bottom: 5rem;
    font-size: 2rem;
  }

  .headerContainer {
    display: flex;
    justify-content: center;
    font: bold 2.5rem Lato, sans-serif;
    color: #F76C6C;
    padding: 5rem;

    .glyph {
      width: auto;
      height: 5rem;
    }
  }

  .form {
    margin: 0 auto;
  }

  .form.login {
    margin-bottom: 10rem;
  }

  .submitBtn {
    width: auto;
    height: 5rem;
    background: transparent;
    border: 0.3rem solid #F76C6C;
    color: #fff;
    font: bold 1.75rem Lato, sans-serif;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const Account = ({
  name,
  username,
  newUsername,
  password,
  newPassword,
  handleChange,
  handleSubmit
}) => {
  return (
    <StyledAccount>
      <div className='headerContainer'>
        <header>sign in</header>
        <img src={arrow} className='glyph' alt='arrow' />
      </div>
      <form className='form login' onSubmit={handleSubmit}>
        <input
          type='text'
          id='username'
          placeholder='username'
          value={username}
          onChange={handleChange}
        />
        <br />
        <input
          type='password'
          id='password'
          placeholder='password'
          value={password}
          onChange={handleChange}
        />
        <br />
        <button type='submit' className='submitBtn'>
          sign in
        </button>
      </form>

      <div className='headerContainer'>
        <header>new user? register!</header>
        <img src={arrow} className='glyph' alt='arrow' />
      </div>
      <form
        className='form register'
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <input
          type='text'
          id='name'
          placeholder='name'
          value={name}
          onChange={handleChange}
        />
        <br />
        <input
          type='text'
          id='newUsername'
          placeholder='username'
          value={newUsername}
          onChange={handleChange}
        />
        <br />
        <input
          type='password'
          id='newPassword'
          placeholder='password'
          value={newPassword}
          onChange={handleChange}
        />
        <br />
        <button type='submit' className='submitBtn'>
          register
        </button>
      </form>
    </StyledAccount>
  );
};

export default Account;