import {bool} from "prop-types";
import {initialState} from "./initialState";



const reducer = (state=initialState, action) => {

  switch (action.type) {
    case 'CHECKED_ALL':
      if (action.payload === 1) {
        if (!state[0].isChecked) {
          return state.map(el => ({...el, isChecked: true}))
        } else {
          return state.map(el => ({...el, isChecked: false}))
        }
      };

    case "CHECKED":
      const newState = state.map((el) => ( el.id === action.payload ? {...el, isChecked: !el.isChecked}: el))
      const index = newState.slice(1)
      const controlChecked = index.every(el=>el.isChecked===true)
      const toggleAllChecked = (newState) => {
        newState[0].isChecked = controlChecked
        return newState
      }
      if (action.payload !== 1) return toggleAllChecked(newState)

    default:
      return  state;
  }
};

export default reducer;