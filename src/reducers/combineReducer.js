import {combineReducers} from "redux";
import reducerFilter from './reducerFilter';
import reducerSorting from "./reducerSorting";
import reducerFetch from "./reducerFetch";

export default combineReducers({
    reducerFetch,
    reducerFilter,
    reducerSorting,
})