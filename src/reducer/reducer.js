import {array, bool, number} from "prop-types";
import {initialState} from "../state/initialState";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";



const reducer = (state=initialState, action) => {

    switch (action.type) {
        case "FETCH_REQUEST":
            return {
                ...state,
                loadingEnd: action.payload
            }

    case 'NON_STOPS':
        if (action.payload) {
            const nonStopsArray = state.arrayWorkingOfTickets.filter(el =>
                !(el.segments[0].stops.length===0&&el.segments[1].stops.length === 0))
            return {
                ...state,
                arrayWorkingOfTickets:nonStopsArray
            }
        }else{
            const nonStopsArray = state.arrayTickets.filter(el =>
                (el.segments[0].stops.length===0&&el.segments[1].stops.length === 0))
            const nonStopsResult = [...nonStopsArray,...state.arrayWorkingOfTickets].sort((a)=>{
                a = a.segments[0].stops.length+a.segments[1].stops.length
                if(a === 0)
                    return 1
            });
            return {
                ...state,
                arrayWorkingOfTickets:nonStopsResult
            }
        }


        case 'ONE_STOPS':
            if (action.payload) {
                const oneStopsArray = state.arrayWorkingOfTickets.filter(el =>
              !(el.segments[0].stops.length + el.segments[1].stops.length - 1 === 0))
          return {
              ...state,
              arrayWorkingOfTickets:oneStopsArray
          }
      }else{
          const oneStopsArray = state.arrayTickets.filter(el =>
              (el.segments[0].stops.length + el.segments[1].stops.length - 1 === 0))
                const oneStopsResult = [...oneStopsArray,...state.arrayWorkingOfTickets].sort((a)=>{
                    a = a.segments[0].stops.length+a.segments[1].stops.length
                    if(a === 1)
                        return 1
                });
          return {
              ...state,
              arrayWorkingOfTickets:oneStopsResult
          }
      }

        case 'TWO_STOPS':
            if (action.payload) {
                const twoStopsArray = state.arrayWorkingOfTickets.filter(el =>
                    el.segments[0].stops.length + el.segments[1].stops.length - 2 !== 0)

                return {
                    ...state,
                    arrayWorkingOfTickets:twoStopsArray
                }
            }else{
                const twoStopsArray = state.arrayTickets.filter(el =>
                    el.segments[0].stops.length + el.segments[1].stops.length - 2 === 0)
                const twoStopsResult = [...twoStopsArray,...state.arrayWorkingOfTickets].sort((a)=>{
                    a = a.segments[0].stops.length+a.segments[1].stops.length
                    if(a === 2)
                        return 1
                });
                return {
                    ...state,
                    arrayWorkingOfTickets:twoStopsResult
                }
            }

      case 'THREE_STOPS':
          if (action.payload) {
              const threeStopsArray = state.arrayWorkingOfTickets.filter(el =>
                  !(el.segments[0].stops.length + el.segments[1].stops.length - 3 === 0))
              return {
                  ...state,
                  arrayWorkingOfTickets:threeStopsArray
              }
          }else{
              const threeStopsArray = state.arrayTickets.filter(el =>
                  (el.segments[0].stops.length + el.segments[1].stops.length - 3 === 0))
              const threeStopsResult = [...threeStopsArray,...state.arrayWorkingOfTickets,].sort((a)=>{
                  a = a.segments[0].stops.length+a.segments[1].stops.length
                  // console.log("AAAAAA",a)
                  if(a === 3)
                      return 1
              });
              return {
                  ...state,
                  arrayWorkingOfTickets:threeStopsResult
              }
          }

    case 'CHECKED_ALL':
      if (action.payload === 1) {
        if (!state.checkBoxSettings[0].isChecked) {
          const newCheckBoxSettings = state.checkBoxSettings.map(el => ({...el, isChecked: true}))
            return {
            ...state,
            checkBoxSettings:newCheckBoxSettings,
            arrayWorkingOfTickets: state.arrayTickets
          }
        } else {
          const newCheckBoxSettings = state.checkBoxSettings.map(el => ({...el, isChecked: false}))
          return {
              ...state,
              checkBoxSettings:newCheckBoxSettings,
              arrayWorkingOfTickets: []
          }
        }
      };

    case "CHECKED":
      const newCheckBoxSettings = state.checkBoxSettings.map((el) =>
        ( el.id === action.payload ? {...el, isChecked: !el.isChecked}: el))

      const toggleAllChecked = () => {
        const index = newCheckBoxSettings.slice(1)
        const controlChecked = index.every(el=>el.isChecked===true)
        const indexStart = newCheckBoxSettings.slice(0,1)
        indexStart[0].isChecked = controlChecked
       }
      if (action.payload !== 1) {
        toggleAllChecked()
        return {...state,checkBoxSettings:newCheckBoxSettings}
      }

    case 'FETCH_REQUEST_GOOD':
      const oldTicket = state.arrayTickets;
      return {
        ...state,
        arrayTickets: [...oldTicket, ...action.payload],
        arrayWorkingOfTickets: [...oldTicket, ...action.payload]
      }

    case 'THE_CHEAPSET':
        const cheapset = state.arrayWorkingOfTickets.sort((a,b) => (a.price - b.price)
        )
      return {
        ...state,
        arrayWorkingOfTickets: cheapset
      }

    case "THE_FASTEST":
      const fastest = [...state.arrayWorkingOfTickets].sort ((a,b) =>
          (a.segments[0].duration + a.segments[1].duration)-(b.segments[0].duration + b.segments[1].duration)
    )
      return {
        ...state,
        arrayWorkingOfTickets: fastest
      }

    default:
      console.log ("default")
      return  state;

  }
};

export default reducer;