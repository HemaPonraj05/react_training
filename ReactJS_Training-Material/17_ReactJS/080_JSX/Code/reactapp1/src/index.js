import React from 'react';
import ReactDOM from 'react-dom';
import {
  App1,
  App2,
  App3,
  App4,
  App5,
  App6,
} from './App';

ReactDOM.render(
  <App1 />, document.getElementById('app1'));

ReactDOM.render(
  <App2 />, document.getElementById('app2'));

ReactDOM.render(
  <App3 name="Sreekanth" />, document.getElementById('app3'));

ReactDOM.render(
  <App4 />, document.getElementById('app4'));

ReactDOM.render(
  <App5 />, document.getElementById('app5'));

ReactDOM.render(
  <App6 />, document.getElementById('app6'));
