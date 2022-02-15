import React from "react";
import './Filter.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../actions/actions";


function Filter (props) {
  const {checkBoxSettings, toggleCheckAll, toggleCheckbox} = props
  const elements = checkBoxSettings.map((el) => {
    const { label, id, isChecked} = el
    return (
      <label key={ id } className="container__checkbox option">
        <input type="checkbox" className="check__input totalCheckbox"
               onClick = {() => {
                 id === "All"? toggleCheckAll(id,isChecked):toggleCheckbox(id,isChecked)}
               }
               checked={isChecked}
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

const mapStateToProps = ({reducerFilter})=> {
  return {
      checkBoxSettings: reducerFilter.checkBoxSettings ,
  };
}

Filter.propTypes = {
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
    GET_TICKETS: PropTypes.func.isRequired,
    toggleCheckAll:PropTypes.func.isRequired,
    toggleCheckbox:PropTypes.func.isRequired,

};


export default connect (mapStateToProps, actions)(Filter)