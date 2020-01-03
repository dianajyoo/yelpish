import React from 'react';
import Search from '../components/Search';
import LocationSearch from '../components/LocationSearch';
import Button from '../components/Button';
import background from '../images/jay-wennington.jpg';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getGeoLocation } from '../store/actionCreators/locationAction';
import { setQuery } from '../store/actionCreators/searchAction';

const Home = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`

class SearchContainer extends React.Component {
  state = {
    input: '',
    location: ''
  };

  componentDidMount() {
    const { getGeoLocation } = this.props;
    getGeoLocation();
  }

  componentDidUpdate(prevProps) {
    const { latitude, longitude } = this.props;

    if (prevProps.latitude !== latitude || prevProps.longitude !== longitude) {
      this.getLocation();
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { input } = this.state;
    const { setQuery, history } = this.props;
    setQuery(input);

    history.push('/search');
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  getLocation = () => {
    const { latitude, longitude } = this.props;

    const URL = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_GEOCODE_API_KEY}&location=${latitude},${longitude}`;

    fetch(URL)
      .then((res) => res.json())
      .then((loc) => {
        let city = loc.results[0].locations[0].adminArea5;
        let country = loc.results[0].locations[0].adminArea3;

        this.setState({ location: `${city}, ${country}` });
      });
  };

  render() {
    return (
      <Home>
        <form className='form' onSubmit={this.handleSubmit}>
          <Search onChange={this.handleChange} input={this.state.input} />
          <LocationSearch
            onChange={this.handleChange}
            location={this.state.location}
          />
          <Button />
        </form>
      </Home>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    latitude: state.location.latitude,
    longitude: state.location.longitude
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGeoLocation: () => dispatch(getGeoLocation()),
    setQuery: (query) => dispatch(setQuery(query))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer));