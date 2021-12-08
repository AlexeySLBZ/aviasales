import React from "react";
import { connect } from "react-redux";

import './Tabs.css';
import * as actionsForSortingTickets from "../../actions/actionsForSortingTickets";
import PropTypes from "prop-types";

function SortingTickets(props) {
 const {state,THE_CHEAPSET,THE_FASTEST} = props
  console.log ('State in Filter ticket',props)
  return (
    <div className="tabs">
      <button className="tabs__button"
              value="САМЫЙ ДЕШЕВЫЙ"
              disabled={state.loadingEnd}
              onClick={THE_CHEAPSET}>САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className="tabs__button"
              value="САМЫЙ БЫСТРЫЙ"
              onClick={THE_FASTEST}
      >САМЫЙ БЫСТРЫЙ</button>
    </div>
  )
}
const mapStateToProps = (state)=> {
  return {
    state
  };
}

SortingTickets.propTypes = {
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
    THE_FASTEST: PropTypes.func.isRequired,
    THE_CHEAPSET:PropTypes.func.isRequired,
};

export default connect (mapStateToProps, actionsForSortingTickets )(SortingTickets)