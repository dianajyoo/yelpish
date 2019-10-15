import React from 'react';
import RestaurantList from '../components/RestaurantList';

class RestaurantContainer extends React.Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    const URL = `https://api.foursquare.com/v2/venues/explore?client_id=${process.env.REACT_APP_PLACES_CLIENT_ID}&client_secret=${process.env.REACT_APP_PLACES_CLIENT_SECRET}&v=20180323&limit=3&ll=40.7243,-74.0018&categoryId=4d4b7105d754a06374d81259&query=coffee`;

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          restaurants: data.response.groups[0].items
        });
      });
  }

  render() {
    console.log('state: ', this.state.restaurants)
  
    return (
      <div className="restaurantContainer">
        <RestaurantList restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default RestaurantContainer;