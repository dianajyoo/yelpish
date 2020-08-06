import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { findRestaurants } from './actions/search_actions';
import { update } from '../profile/actions/profile_actions';
import { verify } from '../../store/actionCreators/authAction';

import Nav from '../navbar/Nav';
import Facet from '../facets/Facet';
import RestaurantList from '../restaurant/restaurant_list';
import Pagination from '../pagination/Pagination';

import { Search, Wrapper } from './styles';

const SearchContainer = ({
  loggedIn,
  authorized,
  userID,
  latitude,
  longitude,
  query,
  radius,
  price,
  page,
  match,
  restaurants,
  findRestaurants,
  update,
  logout,
  history,
}) => {
  const [restaurantID, setRestaurantID] = useState(null);

  useEffect(() => {
    if (restaurants.length !== undefined) {
      findRestaurants(latitude, longitude, query, radius, price, page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurants.length]);

  const handlePrice = (e) => {
    let price = e.target.innerText;

    if (price === '$') {
      price = 1;
    } else if (price === '$$') {
      price = 2;
    } else if (price === '$$$') {
      price = 3;
    } else {
      price = 4;
    }

    findRestaurants(latitude, longitude, query, radius, price, page);
  };

  const handleDistance = (e) => {
    const distance = e.target.innerText;
    const metersInAMile = 1600;
    const distanceInMeters = distance * metersInAMile;

    findRestaurants(latitude, longitude, query, distanceInMeters, price, page);
  };

  const getNextPage = (e) => {
    const nextPage = e.target.innerText;

    // Show next 10 restaurants
    findRestaurants(latitude, longitude, query, radius, price, nextPage);
  };

  const like = (e) => {
    const target = e.target.parentNode;
    const name = target.dataset.name;
    const photo = target.dataset.photo;
    const id = target.dataset.id;

    setRestaurantID(id);

    if (loggedIn && authorized) {
      update(name, photo, id, userID);
      return;
    }

    alert('Please log in first.');
    history.push('/account');
  };

  // let restaurantName;

  // const detailsRouter = restaurants.map((restaurant) => {
  //   restaurantName = restaurant.name.toLowerCase().replace(/\s/g, '-');

  //   return (
  //     <Route
  //       key={restaurant.id}
  //       exact
  //       path={`${match.url}/:restaurantName`}
  //       render={(props) => (
  //         <RestaurantDetails
  //           {...props}
  //           restaurant={restaurant}
  //           name={restaurantName}
  //         />
  //       )}
  //     />
  //   );
  // });

  const listRouter = (
    <Route
      exact
      path={`${match.url}`}
      render={(props) => (
        <RestaurantList
          {...props}
          restaurantID={restaurantID}
          restaurants={restaurants}
          like={like}
        />
      )}
    />
  );

  return (
    <Search>
      <Nav loggedIn={loggedIn} logout={logout} />
      <Wrapper>
        <Facet handlePrice={handlePrice} handleDistance={handleDistance} />
        {/* {detailsRouter} */}
        {listRouter}
      </Wrapper>
      <Pagination handleClick={getNextPage} />
    </Search>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
    authorized: state.auth.authorized,
    userID: state.auth.userID,
    latitude: state.location.latitude,
    longitude: state.location.longitude,
    query: state.search.query,
    page: state.search.page,
    radius: state.search.radius,
    price: state.search.price,
    restaurants: state.search.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findRestaurants: (latitude, longitude, query, radius, price, page) =>
      dispatch(
        findRestaurants(latitude, longitude, query, radius, price, page)
      ),
    verify: (token) => dispatch(verify(token)),
    update: (name, photo, restaurantID, userID) =>
      dispatch(update(name, photo, restaurantID, userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
