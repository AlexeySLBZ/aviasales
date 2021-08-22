import React from "react";
import logoS7 from "../App/img/S7 Logo.svg";
import './ticket.css'

export default function Ticket() {
  return (
    <div className="ticket">
      <div className="ticket__header">
                  <span className="ticket__price">
                    13 400 P
                  </span>
        <img src={logoS7} alt = "лого S7" className="logo_S7"/>
      </div>
      <div className="ticket__container__info">
        <div className= "ticket__info">
          <div className="info__ticket__route">
            <span className="info__ticket__route__title">MOW–HKT</span>
            <span className="info__ticket__route__time">10:45-08:00</span>
          </div>
          <div className="info__ticket__lenght">
            <span className="info__ticket__lenght__text">В ПУТИ</span>
            <span className="info__ticket__lenght__time">21ч 15м</span>
          </div>
          <div className="info__ticket__stops">
            <span className="info__ticket__stops__counter">2 ПЕРЕСАДКИ</span>
            <span className="info__ticket__stops__name">HKG,JNB</span>
          </div>
        </div>
        <div className="ticket__info">
          <div className="info__ticket__route">
            <span className="info__ticket__route__title">MOW–HKT</span>
            <span className="info__ticket__route__time">11:20-00:50</span>
          </div>
          <div className="info__ticket__lenght">
            <span className="info__ticket__lenght__text">В ПУТИ</span>
            <span className="info__ticket__lenght__time">13ч 30м</span>
          </div>
          <div className="info__ticket__stops">
            <span className="info__ticket__stops__counter">1 ПЕРЕСАДКА</span>
            <span className="info__ticket__stops__name">HKG</span>
          </div>
        </div>
      </div>
    </div>
  )
}
