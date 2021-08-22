import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Components/reducer/reducer";

import './Components/App/App.css';
import App from "./Components/App/App";


const store = createStore( reducer );


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


