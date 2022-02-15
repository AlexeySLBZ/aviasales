import React from "react";
import { connect } from "react-redux";
import logoS7 from "../App/img/S7 Logo.svg";
import './ticket.css';
import PropTypes from "prop-types";
import * as actions from "../../actions/actions";


const sortAndFilterTickets = (reducerFetch, reducerFilter,reducerSorting,resultArray=[])=> {

    const usedActualFilter = () => {
      reducerFilter.checkBoxSettings.map((el) => {
        const arrayIdFilter = reducerFetch.arrayTickets.filter(elem =>
          (elem.segments[0].stops.length + elem.segments[1].stops.length === el.id))
        const allFilterNoChecked = reducerFilter.checkBoxSettings.every(elem =>!elem.isChecked)
        const allFilterChecked = reducerFilter.checkBoxSettings.every(elem =>elem.isChecked)

        if (el.isChecked&&el.id ==='All'){
          resultArray=[...reducerFetch.arrayTickets]
        }else if(!el.isChecked&&el.id ==='All') {
          resultArray = [];
        }
        if (el.isChecked && !allFilterChecked) {
          resultArray.push(...arrayIdFilter)
        }else if (allFilterNoChecked){
          resultArray = []
        }
      })
      return resultArray
      }

    const fast = (array) => {
      return [...array.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))];
    }

    const cheap = (array) => {
      return [...array.sort((a, b) => (a.price - b.price))];
    }

    const cheapIndex = reducerSorting.sortingStatus.some(element => !element.isChecked && element.id === 'cheap')
    const fastIndex = reducerSorting.sortingStatus.some(element => !element.isChecked && element.id === 'fast')

    if (cheapIndex) {
      console.log(usedActualFilter())
      return cheap(usedActualFilter())
    } else if (fastIndex) {
      console.log(usedActualFilter())
      return fast(usedActualFilter())
    } else {
      return usedActualFilter()
    }

  }


  function TicketBody({ arrayWorkingOfTickets }) {

    const arrayTickets = arrayWorkingOfTickets.map(el => {

      const { price, carrier, segments } = el
      const date0 = new Date(segments[0].date)
      const date1 = new Date(segments[1].date)

      const getTimeFlay = (date) => {
        const dateFinal = new Date(date.getTime() + (segments[0].duration * 60000))
        const result = `${date.getHours()}:${date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`}
      -${dateFinal.getHours()}:${dateFinal.getMinutes() > 10 ? dateFinal.getMinutes() : `0${dateFinal.getMinutes()}`}`
        return result.toString()
      }

      const timeToFlay = (min) => {
        const result = `${Math.trunc(min / 60)}ч ${min % 60} мин`
        return result
      }

      return (

        <div className="ticket">
          <div className="ticket__header">
                  <span className="ticket__price">
                    {`${price} Р`}
                  </span>
            <img src={logoS7} alt="лого S7" className="logo_S7"/>
          </div>
          <div className="ticket__container__info">
            <div className="ticket__info">
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

  const mapStateToProps = ({ reducerFetch, reducerFilter, reducerSorting }) => {

    return {
      arrayWorkingOfTickets:[...sortAndFilterTickets(reducerFetch, reducerFilter, reducerSorting)],
      loadingEnd: reducerFetch.loadingEnd,
    }
  }

  TicketBody.propTypes = {
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayTickets: PropTypes.array,
  };

export default connect (mapStateToProps, actions)(TicketBody)