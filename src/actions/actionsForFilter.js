import {getSearchId, getSearchToKey} from "../fetch"
export const toggleCheckAll= (id)=>
    ({
        type: 'CHECKED_ALL',
        payload: id,
    });

export const toggleCheckbox  = (id,isChecked)=>(dispatch)=> {
    dispatch({
        type: 'CHECKED',
        payload: id,
    })
    if(id === 2) {dispatch(NON_STOPS(isChecked))}
    if(id === 3) {dispatch(ONE_STOPS(isChecked))}
    if(id === 4) {dispatch(TWO_STOPS(isChecked))}
    if(id === 5) {dispatch(THREE_STOPS(isChecked))}
};

export const NON_STOPS = (isChecked)=>
    ({
      type:'NON_STOPS',
      payload: isChecked,
    })

export const ONE_STOPS = (isChecked)=>
    ({
      type:"ONE_STOPS",
      payload: isChecked
    })

export const TWO_STOPS = (isChecked)=>
    ({
        type: "TWO_STOPS",
        payload: isChecked
    })

export const THREE_STOPS = (isChecked)=>
    ({
      type:"THREE_STOPS",
      payload: isChecked
    })

export const FETCH_REQUEST = (boolean) => ({ type: 'FETCH_REQUEST', payload:boolean});
export const FETCH_REQUEST_GOOD = (tickets) => ({ type: 'FETCH_REQUEST_GOOD', payload: tickets });
export const FETCH_REQUEST_BAD = () => ({ type: 'FETCH_REQUEST_BAD', payload: 'Error' });

export const GET_TICKETS = () => async(dispatch) => {
  const searchId = await getSearchId;

  const request = async () => {
    try {
      const tickets = await getSearchToKey(searchId.searchId)
        dispatch(FETCH_REQUEST_GOOD(tickets.tickets));
      dispatch(FETCH_REQUEST(true));
      if(!tickets.stop) {
          dispatch(FETCH_REQUEST_BAD());
        return request();
      }else{
          dispatch(FETCH_REQUEST(false));
      }
    } catch (e) {
      return request();
    }
  }
  return request();
};
