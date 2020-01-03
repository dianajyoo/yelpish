import React from 'react';
import RestaurantList from '../components/RestaurantList';
import RestaurantDetails from '../components/RestaurantDetails';
import Pagination from '../components/Pagination';
import Facets from '../components/Facets';
import Header from '../components/Header';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { findRestaurants } from '../store/actionCreators/searchAction';
import { verify } from '../store/actionCreators/authAction';

class RestaurantContainer extends React.Component {
  componentDidMount() {
    const {
      latitude,
      longitude,
      query,
      radius,
      price,
      page,
      findRestaurants
    } = this.props;

    // pull all restaurants with these parameters
    findRestaurants(latitude, longitude, query, radius, price, page);

    // verify logged in user by passing token in localStorage
    const { verify } = this.props;
    const token = localStorage.getItem('token');

    if (token !== null) {
      verify(token);
    }
  }

  handlePriceClick = (e) => {
    const {
      latitude,
      longitude,
      query,
      radius,
      page,
      findRestaurants
    } = this.props;
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

    // after price change, return only restaurants with that price
    findRestaurants(latitude, longitude, query, radius, price, page);
  };

  handleDistanceClick = (e) => {
    const {
      latitude,
      longitude,
      query,
      price,
      page,
      findRestaurants
    } = this.props;
    const distance = e.target.innerText;
    const metersInAMile = 1600;
    const distanceInMeters = distance * metersInAMile;

    // return only restaurants wihtin range of distance
    findRestaurants(latitude, longitude, query, distanceInMeters, price, page);
  };

  handlePaginationClick = (e) => {
    const {
      latitude,
      longitude,
      query,
      radius,
      price,
      findRestaurants
    } = this.props;
    const nextPage = e.target.innerText;

    // show next 10 restaurants
    findRestaurants(latitude, longitude, query, radius, price, nextPage);
  };

  render() {
    const { match, restaurants, loggedIn, handleLogout, like } = this.props;
    let restaurantName;

    const detailsRouter = restaurants.map((restaurant) => {
      restaurantName = restaurant.name.toLowerCase().replace(/\s/g, '-');

      return (
        <Route
          key={restaurant.id}
          exact
          path={`${match.url}/:restaurantName`}
          render={(props) => (
            <RestaurantDetails
              {...props}
              restaurant={restaurant}
              name={restaurantName}
            />
          )}
        />
      );
    });

    const listRouter = (
      <Route
        exact
        path={`${match.url}`}
        render={(props) => (
          <RestaurantList {...props} restaurants={restaurants} like={like} />
        )}
      />
    );

    return (
      <div className='restaurantContainer'>
        <Header loggedIn={loggedIn} handleLogout={handleLogout} />
        <Facets
          handlePriceClick={this.handlePriceClick}
          handleDistanceClick={this.handleDistanceClick}
        />
        {detailsRouter}
        {listRouter}
        <Pagination handleClick={this.handlePaginationClick} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    latitude: state.location.latitude,
    longitude: state.location.longitude,
    query: state.search.query,
    page: state.search.page,
    radius: state.search.radius,
    price: state.search.price,
    restaurants: state.search.restaurants,
    loggedIn: state.auth.loggedIn
  };
} 

const mapDispatchToProps = (dispatch) => {
  return {
    findRestaurants: (latitude, longitude, query, radius, price, page) =>
      dispatch(
        findRestaurants(latitude, longitude, query, radius, price, page)
      ),
    verify: (token) => dispatch(verify(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);