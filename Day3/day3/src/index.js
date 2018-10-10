import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./Reducers/counterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const spaStore = createStore(counterReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={spaStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
