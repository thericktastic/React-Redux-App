// motherland index

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// reducers
import { reducer } from "./reducers";

// components
import App from "./App";

// styling
import "./index.css";

// Step 1 - create a store and connect it to our app
// Use createStore function and pass it the reducer and applyMiddleware, passing thunk and logger in applyMiddleware (logger must come last)
const store = createStore(reducer, applyMiddleware(thunk, logger));
console.log("This is store in index.js: ", store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
