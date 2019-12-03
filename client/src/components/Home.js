import React from 'react';
import SearchContainer from '../containers/SearchContainer';

const divStyle = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Home = () => {
  return (
    <div className='home' style={divStyle}>
      <SearchContainer />
    </div>
  );
}

export default Home;