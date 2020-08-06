const initialState = {
  restaurants: [],
  query: '',
  page: 1,
  radius: 40000,
  price: '1,2,3,4',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUERY':
      return {
        ...state,
        query: action.query,
      };
    case 'GET_RESTAURANTS':
      const page = action.page;
      const firstIndex = (page - 1) * 10;
      const lastIndex = page * 10 - 1;

      return {
        ...state,
        restaurants: action.restaurants.slice(firstIndex, lastIndex + 1),
        radius: action.radius,
        price: action.price,
        page: action.page,
      };
    default:
      return state;
  }
};

export default searchReducer;
