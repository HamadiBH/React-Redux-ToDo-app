import { ADD_TODO, DELETE_TODO, SWITCHER } from "../constants/actionsTypes"



const initialState=[]


const TodoReducer=(state=initialState, action)=>{

switch(action.type){
    case ADD_TODO:
        return state.concat(action.payload)

    case DELETE_TODO:
        return state.filter(item => item.id !== action.payload)

    case SWITCHER:
        return state.map(item=> item.id===action.playload ? {...item, isComplete:!item.isComplete}: item)


        default:
            return state
}


}
export default TodoReducer