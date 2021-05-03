import {combineReducers} from 'redux'
import todoList from './todoList'
import page from './page'
import todoData from './todoData'
import action from './action'
import result from './result'

const myReducer = combineReducers({
    todoList,
    page,
    todoData,
    action,
    result
});

export default myReducer;