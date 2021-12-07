const initialState = {
  currentCiy: {},
  cities: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CURRENT_CITY":
      return {
          ...state,
        currentCiy: action.payload,
      };

    case "GET_CITIES":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };

    default:
      return state;
  }
}

export default rootReducer;
