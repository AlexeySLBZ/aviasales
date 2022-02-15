import initialState from "./initialState"


const reducerSorting = (state= initialState, action) => {

    const fast = (array) =>{
        return array.sort((a, b) =>
            (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))}

    const cheap = (array)=>{
        return array.sort((a, b) => (a.price - b.price))}

    switch (action.type) {

        case 'THE_SORTING':
            const newSortingStatus = state.sortingStatus.map((el) => {
                if (action.payload.id === el.id) {
                    return {...el, isChecked: !action.payload.isChecked}
                } 
                    return {...el, isChecked: true}
                
            })

            return {
                ...state,
                arrayWorkingOfTickets: action.payload.id === "fast" ? fast(state.arrayTickets) :
                    cheap(state.arrayTickets),
                sortingStatus: newSortingStatus
            }

        default:
            return state;


    }

};

export default reducerSorting;