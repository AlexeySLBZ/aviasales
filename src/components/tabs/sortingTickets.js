import React from "react";
import {connect} from "react-redux";

import './Tabs.css';
import PropTypes from "prop-types";
import * as actions from "../../actions/actions";

function SortingTickets(props) {

    const {THE_SORTING, sortingStatus} = props

    const elements = sortingStatus.map((el) => {
        const {id, label, isChecked} = el
        const classes = ['tabs__button']

        if (!isChecked) classes.push("tabs__button1")
        return (
            <button className={classes.join(' ')}
                    id={id}
                    onClick={() => {
                        THE_SORTING(id, isChecked)
                    }}>{label}
            </button>
        )
    })

    return (
        <div className="tabs">
            {elements}
        </div>

    )
}

const mapStateToProps = ({reducerSorting}) => {
    return {
        sortingStatus: reducerSorting.sortingStatus,
    };
}

SortingTickets.propTypes = {
    sortingStatus: PropTypes.arrayOf(PropTypes.object).isRequired,
    THE_SORTING: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(SortingTickets)