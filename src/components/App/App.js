import React, {useEffect} from 'react';
import logo from './img/LogoAirplan.svg'
import './App.css';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Filter from "../Filter/Filter";
import SortingTickets from "../tabs/sortingTickets";
import TicketBody from "../ticket/ticketBody";
import {connect} from "react-redux";
import * as actions from "../../actions/actions";
import reducerFilter from '../../reducers/reducerFilter';

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>

const marginSpinner = {
    marginTop: '50%',
}

function App({loadingEnd,GET_TICKETS,allFilterNoChecked}) {
    useEffect(() => {
        GET_TICKETS();
    }, [GET_TICKETS]);


    const hideBodyTickets = (allFilterNoChecked) => {
        if (allFilterNoChecked) {
            return (<p>Рейсов, подходящих под заданные фильтры, не найдено</p>)
        } else {
            return (<TicketBody/>)
        }
    }

    return (
        <div className="App">
            <div className="logo__container">
                <img src={logo} alt="лого самолет" className="logo-airplane-png"/>
            </div>
            <Filter/>
            <div className="container__result">
                <SortingTickets/>
                <Spin spinning={loadingEnd} size="large" indicator={antIcon} className={marginSpinner}/>
                {hideBodyTickets(allFilterNoChecked)}
            </div>
        </div>
    );
}

const mapStateToProps =({reducerFetch,reducerFilter}) => (
   {
    tickets: reducerFetch.arrayTickets,
    loadingEnd: reducerFetch.loadingEnd,
    allFilterNoChecked: reducerFilter.checkBoxSettings.every(elem => !elem.isChecked)
}
)

App.propTypes = {
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
    GET_TICKETS: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(App);
