import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';

import './index.css';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

// window.store = store; used to debug when data was not creating cards



ReactDOM.render(
  <Provider  store={store}>
    <App />  
  </Provider>,
  //<React.StrictMode></React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
