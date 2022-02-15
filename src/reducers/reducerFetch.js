import initialState from "./initialState"


const reducerFetch = (state=initialState, action) => {

    switch (action.type) {
        case "FETCH_REQUEST":
            return {
                ...state,
                loadingEnd: action.payload
            }

    case 'FETCH_REQUEST_GOOD':
      const oldTicket = state.arrayTickets;
      return {
        ...state,
        arrayTickets: [...oldTicket, ...action.payload],
      }

    default:
      return  state;
  }
};

export default reducerFetch;