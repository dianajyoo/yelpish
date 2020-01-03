const initialState = {
  favorites: []
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.favorites
      };
    case 'UPDATE_FAVORITES':
      return {
        ...state,
        favorites: action.favorites
      };
    case 'RESET_FAVORITES':
      return {
        ...state,
        favorites: action.favorites
      };
    default:
      return state;
  };
};

export default profileReducer;