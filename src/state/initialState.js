import {array} from "prop-types";

export const initialState = {
  checkBoxSettings:[
    {label: "Все", id:1, isChecked: false, disabled:false},
    {label: "Без пересадок", id:2, isChecked: false, disabled: false},
    {label: "1 пересадка", id:3, isChecked: false, disabled: false},
    {label: "2 пересадки", id:4, isChecked: false, disabled: false},
    {label: "3 пересадки", id:5, isChecked: false, disabled: false}
  ],
  arrayTickets: [],
  arrayWorkingOfTickets:[],
  loadingEnd:false
}
