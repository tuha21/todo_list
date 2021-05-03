import {
    DELETE_TODO,
    ADD_TODO,
    UPDATE_TODO
} from '../constants/const'
import _ from 'lodash'

const todoList = []

var singleId = () => {
    const char = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var id = '';
    for (var i = 0; i < 4; i++) {
        id += char.charAt(Math.round(Math.random()*61));
    }
    return id;
}

var id = () => {
    return singleId() + '-' + singleId() + '-' + singleId() + '-' + singleId()
}

const myReducer = (state = todoList, action) => {
    switch (action.type) {
        case DELETE_TODO:
            return _.remove(state, val => {
                return val.id !== action.todo.id;
            })
        case ADD_TODO:
            return _.concat(state, {
                id : id(),
                name : action.todo.name,
                status : action.todo.status
            });
        case UPDATE_TODO: 
            return _.map(state, val => {
                return val.id === action.todo.id ? action.todo : val
            })
        default: return state;
    }
}

export default myReducer;