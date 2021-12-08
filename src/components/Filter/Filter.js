import React from "react";
import './Filter.css';
import { connect } from "react-redux";
import * as actionsForFilter from '../../actions/actionsForFilter'
import PropTypes from "prop-types";


function Filter (props) {
  const {state, toggleCheckAll, toggleCheckbox, GET_TICKETS} = props
  const elements = state.checkBoxSettings.map((el) => {
    const { label, id, isChecked,disabled } = el
    return (
      <label key={ id } className="container__checkbox option">
        <input type="checkbox" className="check__input totalCheckbox"
               onClick = {() => {
                 id === 1? toggleCheckAll(id,isChecked):toggleCheckbox(id,isChecked)}
               }
               checked={isChecked}
               disabled={disabled}
        />
        <span className="custom__check__box"/>
        {label}
      </label>
      );
    });
  return (
      <div className="filter__checkbox__wrapper">
            <span className="container__checkbox__name option">
              КОЛИЧЕСТВО ПЕРЕСАДОК
            </span>
        {elements}
      </div>
  )
}

const mapStateToProps = (state)=> {
  return {
    state
  };
}

Filter.propTypes = {
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
    GET_TICKETS: PropTypes.func.isRequired,
    toggleCheckAll:PropTypes.func.isRequired,
    toggleCheckbox:PropTypes.func.isRequired,

};


export default connect (mapStateToProps, actionsForFilter )(Filter)