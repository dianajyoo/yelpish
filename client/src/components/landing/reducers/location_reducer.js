const initialState = {
  latitude: 40.731969,
  longitude: -73.988987,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LATITUDE':
      return {
        ...state,
        latitude: action.latitude,
      };
    case 'GET_LONGITUDE':
      return {
        ...state,
        longitude: action.longitude,
      };
    default:
      return state;
  }
};

export default locationReducer;
