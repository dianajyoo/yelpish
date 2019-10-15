import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import RestaurantContainer from '../containers/RestaurantContainer';

const divStyle = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Home = (props) => {
  return (
    <div style={divStyle}>
      {/* <SearchContainer /> */}
      <RestaurantContainer />
    </div>
  );
}

export default Home;