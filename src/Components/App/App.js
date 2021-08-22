import React from 'react';
import logo from './img/LogoAirplan.svg'
import './App.css';

import Filter from "../Filter/Filter";
import Tabs from "../Tabs/Tabs";
import Ticket from "../Ticket/ticket";

function App() {


  return (

    <div className="App">
      <div className="logo__container">
        <img src={logo} alt = "лого самолет" className="logo-airplane-png"/>
      </div>
      <Filter />
      <div className="container__result">
        <Tabs/>
        <Ticket/>
      </div>
    </div>
  );
}

export default App;
