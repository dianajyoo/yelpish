import React, { useState, useEffect } from 'react';
import { Form, Input } from '../../global/forms';
import { Button } from '../../global/buttons';
import { Main, Wrapper, FormWrapper, Title, Hero } from './styles';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getGeoLocation } from './actions/location_action';
import { setQuery } from '../../store/actionCreators/searchAction';

const Landing = (props) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    console.log('Mount');
    const { getGeoLocation } = props;

    getGeoLocation();
  }, []);

  useEffect(() => getLocation(), [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('query', query);

    const { setQuery, history } = props;
    setQuery(query);

    history.push('/search');
    reset();
  };

  const reset = () => setQuery('');

  const getLocation = () => {
    const { latitude, longitude } = props;

    const URL = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_GEOCODE_API_KEY}&location=${latitude},${longitude}`;

    fetch(URL)
      .then((res) => res.json())
      .then((loc) => {
        let city = loc.results[0].locations[0].adminArea5;
        let country = loc.results[0].locations[0].adminArea3;

        setLocation(`${city}, ${country}`);
      });
  };

  return (
    <Main>
      <Wrapper>
        <Hero />
        <FormWrapper>
          <Title>yelp•ish</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder='Search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Input
              placeholder='Location'
              value={location}
              onChange={getLocation}
            />
            <Button type='submit' />
          </Form>
        </FormWrapper>
      </Wrapper>
    </Main>
  );
};

const mapStateToProps = (state) => {
  return {
    latitude: state.location.latitude,
    longitude: state.location.longitude,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGeoLocation: () => dispatch(getGeoLocation()),
    setQuery: (query) => dispatch(setQuery(query)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Landing)
);
