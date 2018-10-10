import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
//import userDetailsReducer from "./Reducers/userDetailsReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import cr from "./Reducers/CombinedReducers";

const appStore = createStore(
  cr,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
