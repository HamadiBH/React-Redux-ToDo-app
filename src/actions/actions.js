import { ADD_TODO, DELETE_TODO, SWITCHER } from "../constants/actionsTypes";


export function addTodo (payload){
    return {type:ADD_TODO,payload}
}

export function deleteTodo (payload){
    return {type:DELETE_TODO,payload}
}

export function switcher (payload){
    return {type:SWITCHER,payload}
}