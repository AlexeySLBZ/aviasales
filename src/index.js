import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk"
import reducer from "./reducer/reducer";

import './components/App/App.css';
import App from "./components/App/App";
import {logger} from "./middleware/logger";

const store = createStore( reducer,
  applyMiddleware(
    logger,
    reduxThunk
  ));


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


