import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import combineReducer from "../reducers/combineReducer";

const store = createStore(combineReducer, composeWithDevTools(
    applyMiddleware(
        // logger,
        reduxThunk
    )));

export default store;