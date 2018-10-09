import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./components/App";
import Clock from "./components/Clock";
import StateChange from "./components/StateChange";

//ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("app"));//before export
//ReactDOM.render(<App />, document.getElementById("app")); //Hello World
ReactDOM.render(
  <div>
    <App /> <Clock /> <StateChange />
  </div>,
  document.getElementById("app")
);
