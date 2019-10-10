import React from 'react';
import Search from '../components/Search';
import LocationSearch from '../components/LocationSearch';
import Button from '../components/Button';

class SearchContainer extends React.Component {
  state = {
    input: '',
    location: '',
    latitude: 0,
    longitude: 0
  }

  componentDidMount() {
    this.getGeoLocation();
    this.getLocation();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    this.clearInput();
  }

  clearInput = () => {
    this.setState({
      input: ''
    });
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    }
  }

  getLocation = () => {
    const URL = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_GEOCODE_API_KEY}&location=${this.state.latitude},${this.state.longitude}`;

    fetch(URL)
      .then(res => res.json())
      .then(loc => {
        let city = loc.results[0].locations[0].adminArea5;
        let country = loc.results[0].locations[0].adminArea3;

        this.setState({
          location: `${city}, ${country}`
        });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Search onChange={this.handleChange} input={this.state.input} />
        <LocationSearch onChange={this.handleChange} location={this.state.location} />
        <Button />
      </form>
    );
  }
}

export default SearchContainer;