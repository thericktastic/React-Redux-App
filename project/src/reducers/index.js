// reducers index

// Set initial state for testing
const initialState = {
  isLoading: false,
  trivia: null,
  error: ""
};

console.log("This is initialState in reducers/index.js: ", initialState);

// Reducers will throw an error if action is anything but an object
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_TRIVIA_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCHING_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        trivia: action.payload
      };
    default:
      return state;
  }
};
