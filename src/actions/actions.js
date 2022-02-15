
import {getSearchId, getSearchToKey} from "../services/fetch";

export const FETCH_REQUEST = (boolean) => ({type: 'FETCH_REQUEST', payload: boolean});
export const FETCH_REQUEST_GOOD = (tickets) => ({type: 'FETCH_REQUEST_GOOD', payload: tickets});
export const FETCH_REQUEST_BAD = () => ({type: 'FETCH_REQUEST_BAD', payload: 'Error'});

export const GET_TICKETS = () => async (dispatch) => {
    const searchId = await getSearchId;

    const request = async () => {
        try {
            const tickets = await getSearchToKey(searchId.searchId)

            dispatch(FETCH_REQUEST_GOOD(tickets.tickets));
            dispatch(FETCH_REQUEST(true));
            if (!tickets.stop) {
                dispatch(FETCH_REQUEST_BAD());
                return request();
            } else {
                dispatch(FETCH_REQUEST(false));

            }

        } catch (e) {
            return request();
        }
    }
    return request();
};
export const toggleCheckAll = (id) =>
    ({
        type: 'CHECKED_ALL',
        payload: id,
    });

export const toggleCheckbox = (id, isChecked) => (dispatch) => {
    dispatch({
        type: 'CHECKED',
        payload: id,
    })
    dispatch(NUMBER_STOPS(id, isChecked))
};

export const NUMBER_STOPS = (id, isChecked) =>
    ({
        type: 'NUMBER_STOPS',
        payload: {
            id,
            isChecked
        },
    });

export const THE_SORTING = (id, isChecked) => (
    id ? {
        type: 'THE_SORTING',
        payload: {
            isChecked,
            id
        }
    } : {
        type: 'THE_SORTING',
        payload: {
            id: null
        }
    })