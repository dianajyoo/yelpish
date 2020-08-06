import React, { useState, useEffect } from 'react';
import { Form, Input } from '../../global/forms';
import { Button } from '../../global/buttons';
import { Main, Wrapper, FormWrapper, Title, Hero } from './styles';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getGeoLocation } from './actions/location_actions';
import { getQuery } from '../search/actions/search_actions';

const Landing = ({
  latitude,
  longitude,
  getGeoLocation,
  getQuery,
  history,
}) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    getGeoLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getLocation(), [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    getQuery(query);
    history.push('/search');
    reset();
  };

  const reset = () => setQuery('');

  const getLocation = () => {
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
              className='input--mr'
              placeholder='Search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Input
              placeholder='Location'
              value={location}
              onChange={getLocation}
            />
            <Button type='submit' className='btn--hide' />
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
    getQuery: (query) => dispatch(getQuery(query)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Landing)
);
