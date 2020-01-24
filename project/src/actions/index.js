// actions index

import axios from "axios";

export const fetchTrivia = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_TRIVIA_START" });
    // Here is where we can make the API call
    axios
      .get("http://numbersapi.com/random/trivia")
      .then(res => {
        console.log("This is res.data: ", res.data);
        dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data });
      })
      .catch(err => console.log("You failed! Here's why: ", err));
  };
};

// This commented block explains how thunk works to intercept the above function
// const thunk = action => next => store => {
//     if (typeof action === 'function') {
//         action(store.dispatch);
//     } else if (typeof action === 'object') {
//         next(action);
//     }
// };
