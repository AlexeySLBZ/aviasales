const initialState = {
    checkBoxSettings:[
        {label: "Все", id:"All", isChecked: true,},
        {label: "Без пересадок", id:0, isChecked: true,},
        {label: "1 пересадка", id:1, isChecked: true, },
        {label: "2 пересадки", id:2, isChecked: true, },
        {label: "3 пересадки", id:3, isChecked: true, },
    ],
    sortingStatus:[
        {label:"САМЫЙ ДЕШЕВЫЙ", id:"cheap", isChecked:true},
        {label:"САМЫЙ БЫСТРЫЙ", id:"fast", isChecked:true}
    ],
    arrayTickets: [],
    // arrayWorkingOfTickets:[],
    loadingEnd:false
}

export default initialState