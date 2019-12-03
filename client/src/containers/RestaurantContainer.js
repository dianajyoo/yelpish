import React from 'react';
import RestaurantList from '../components/RestaurantList';
import RestaurantDetails from '../components/RestaurantDetails';
import { Route, Switch } from 'react-router-dom';

class RestaurantContainer extends React.Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    const URL = `https://api.foursquare.com/v2/venues/explore?client_id=${process.env.REACT_APP_PLACES_CLIENT_ID}&client_secret=${process.env.REACT_APP_PLACES_CLIENT_SECRET}&v=20180323&limit=5&ll=40.7243,-74.0018&categoryId=4d4b7105d754a06374d81259&query=coffee`;

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          restaurants: data.response.groups[0].items
        });
      });
  }

  render() {
    console.log(this.state.restaurants)
    const { match } = this.props;
    const detailsRouter = this.state.restaurants.map(restaurant => {
      let restaurantName = restaurant.venue.name.toLowerCase().replace(/\s/g, '-');
      return <Route 
        exact path={`${match.url}/:restaurantName`}
        render={(props) => <RestaurantDetails {...props} restaurant={restaurant} name={restaurantName} />} 
      />
    });
    const listRouter = <Route exact path={`${match.url}`} render={(props) => <RestaurantList {...props} restaurants={this.state.restaurants} />} />;
  
    return (
      <div className="restaurantContainer">
        {detailsRouter}
        {listRouter}
      </div>
    );
  }
}

export default RestaurantContainer;