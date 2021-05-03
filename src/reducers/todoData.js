import {
    SET_TODO
} from '../constants/const'

const todoData = {
    id : 0,
    name : '',
    status : true
}

const myReducer = (state = todoData, action) => {
    switch(action.type){
        case SET_TODO : 
            return {
                id : action.todo.id,
                name : action.todo.name,
                status : action.todo.status
            }
        default : return state
    }
}

export default myReducer