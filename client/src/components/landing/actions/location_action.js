export const getLatitude = (latitude) => {
  return {
    type: 'GET_LATITUDE',
    latitude,
  };
};

export const getLongitude = (longitude) => {
  return {
    type: 'GET_LONGITUDE',
    longitude,
  };
};

export const getGeoLocation = () => {
  return (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        dispatch(getLatitude(latitude));
        dispatch(getLongitude(longitude));
      });
    }
  };
};
