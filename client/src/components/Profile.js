import React from 'react';
import styled from 'styled-components';

const StyledProfile = styled.div`
  font: 1.5rem Lato,sans-serif;
  color: #0e1111;

  .welcome {
    margin-bottom: 10rem;
  }

  .container {
    max-width: 1335px;
    margin: 0 auto;

    .gridRow {
      display: flex;
      justify-content: flex-start;
      flex-flow: row wrap;

      .gridItem {
        width: 25%;
        height: auto;
        flex-basis: 20%;
        -ms-flex: auto;
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        border: 0.5px solid #D1D7E0;
        margin: 0 2rem 2rem;
      }

      .favoriteImg {
        width: 70%;
        height: auto;
      }
    }
  }
`

const Profile = ({ user, favorites }) => {
  // console.log('loggedIn', loggedIn)
  let result = [];
 
  result = favorites.map(favorite => {
    return (
      <div className='gridItem'>
        <img src={favorite.photo} className='favoriteImg' alt='favorite' />
        <div>{favorite.name}</div>
      </div>
    );
  });

  return (
    <StyledProfile>
      <h1 className='welcome'>hi, {user ? user.toLowerCase() : ''}! here are your favorites...</h1>

      <div className='container'>
        <div className='gridRow'>
          {result}
        </div>
      </div>
    </StyledProfile>
  );
}

export default Profile;