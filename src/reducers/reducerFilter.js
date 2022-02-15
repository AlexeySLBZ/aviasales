import initialState from "./initialState"


const reducerFilter = (state= initialState, action) => {

    switch (action.type) {
        case 'CHECKED_ALL':
            if (action.payload === "All") {
                if (!state.checkBoxSettings[0].isChecked) {
                    const newCheckBoxSettings = state.checkBoxSettings.map(el => ({...el, isChecked: true}))
                    return {
                        ...state,
                        checkBoxSettings:newCheckBoxSettings,
                    }
                } 
                    const newCheckBoxSettings = state.checkBoxSettings.map(el => ({...el, isChecked: false}))
                    return {
                        ...state,
                        checkBoxSettings:newCheckBoxSettings,
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
            if (action.payload !== "All") {
                toggleAllChecked()
                return {...state,checkBoxSettings:newCheckBoxSettings}
            }

        default:
            return state;

    }
};

export default reducerFilter;