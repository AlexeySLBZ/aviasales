import React from "react";
import './Filter.css';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../actions/actions'
// import {all} from "../actions/actions";


function Filter (props) {


  const {state , toggleCheckAll, toggleCheckbox } = props
  const elements = state.map((el) => {
    const { label, id, isChecked } = el
    return (
      <label key={ id } className="container__checkbox option">
        <input type="checkbox" className="check__input totalCheckbox"
               onClick = {() => {
                 id === 1? toggleCheckAll(id):toggleCheckbox(id)}
               }
               checked={isChecked}
        />
        <span className="custom__check__box"/>
        {label}
      </label>
      );
    });

  return (
  <form className="filter__checkbox__wrapper">
            <span className="container__checkbox__name option">
              КОЛИЧЕСТВО ПЕРЕСАДОК
            </span>
    {elements}
  </form>
  )
}

const mapStateToProps = (state)=> {
  return {
    state
  };
}

export default connect (mapStateToProps, actions )(Filter)