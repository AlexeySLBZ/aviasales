import React from "react";
import { connect } from "react-redux";
import logoS7 from "../App/img/S7 Logo.svg";
import * as actionsForTickets from '../../actions/actionsForSortingTickets'
import './ticket.css'
import PropTypes from "prop-types";



function TicketBody (props) {


  const arrayTickets = props.state.arrayWorkingOfTickets.map(el =>{

    const {price,carrier,segments}=el
    const date0 = new Date(segments[0].date)
    const date1 = new Date(segments[1].date)

    const getTimeFlay = (date)=>{
      const dateFinal = new Date(date.getTime()+(segments[0].duration*60000))
      const result  = `${date.getHours()}:${date.getMinutes()>10?date.getMinutes():`0${date.getMinutes()}`}
      -${dateFinal.getHours()}:${dateFinal.getMinutes()>10?dateFinal.getMinutes():`0${dateFinal.getMinutes()}`}`
      return result.toString()
    }

    const timeToFlay = (min)=>{
      const result = `${Math.trunc(min/60)}ч ${min%60} мин`
      return result
    }



    return (
      <div className="ticket" >
        <div className="ticket__header">
                  <span className="ticket__price">
                    {`${price} Р`}
                  </span>
          <img src={logoS7} alt = "лого S7" className="logo_S7">
          </img>
        </div>
        <div className="ticket__container__info">
          <div className= "ticket__info">
            <div className="info__ticket__route">
            <span className="info__ticket__route__title">
              {`${segments[0].origin} - ${segments[0].destination}`}
            </span>
              <span className="info__ticket__route__time">
                 {getTimeFlay(date0)}
            </span>
            </div>
            <div className="info__ticket__lenght">
              <span className="info__ticket__lenght__text">В ПУТИ</span>
              <span className="info__ticket__lenght__time">
                {timeToFlay(segments[0].duration)}
            </span>
            </div>
            <div className="info__ticket__stops">
            <span className="info__ticket__stops__counter">
              {`${segments[0].stops.length} ПЕРЕСАДКИ`}
            </span>
              <span className="info__ticket__stops__name">
               {segments[0].stops.join(', ')}
            </span>
            </div>
          </div>
          <div className="ticket__info">
            <div className="info__ticket__route">
              <span className="info__ticket__route__title">
                {`${segments[1].origin} - ${segments[1].destination}`}
              </span>
              <span className="info__ticket__route__time">
                {getTimeFlay(date1)}
              </span>
            </div>
            <div className="info__ticket__lenght">
              <span className="info__ticket__lenght__text">В ПУТИ</span>
              <span className="info__ticket__lenght__time">
                {timeToFlay(segments[1].duration)}
              </span>
            </div>
            <div className="info__ticket__stops">
              <span className="info__ticket__stops__counter">
                {`${segments[1].stops.length} ПЕРЕСАДКИ`}
              </span>
              <span className="info__ticket__stops__name">
                {segments[1].stops.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return arrayTickets.slice(0, 5);
}
const mapStateToProps = (state)=> {
  return {
    state
  };
}

TicketBody.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object).isRequired,
  arrayTickets: PropTypes.array,
};


export default connect (mapStateToProps, actionsForTickets )(TicketBody)