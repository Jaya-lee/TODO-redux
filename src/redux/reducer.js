
import {combineReducers} from 'redux'

let lists=[
    { id:1, text:'hello1', select:true },
    { id:2, text:'hello2', select:true },
    { id:3, text:'hello3', select:true }
]
function listReducer(state=lists,action){
    switch(action.type){
        case 'COMPLETED' : return state.map(item =>
            item.id === action.id ?
            {...item,select:!item.select} :
            item)

        case 'SUBMIT' :
        return  [...state,{id:action.id,text:action.text,select:true}]

        default : return state
    }
}
let show = {
    do:'all'
}
function showReducer(state=show,action){
    switch(action.type){
        case 'FINISH' : return {do:'finish'}
        case 'ALL' : return {do:'all'}
        case 'UNFINISH' : return {do:'unfinish'}
        default : return state
    }
}
const rootReducer = combineReducers({
  lists: listReducer,
  show: showReducer
})

export default rootReducer
