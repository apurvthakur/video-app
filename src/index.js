import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from "./scenes";
import App from './App';
import {Router,Switch, Route, Redirect} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
  <Switch>
  <Route exact path="/" component={Home}/>
  </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
