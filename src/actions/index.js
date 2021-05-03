import {
    DELETE_TODO,
    PAGINATION,
    SET_TODO,
    ADD_TODO,
    UPDATE_TODO,
    SET_ACTION,
    RESULT
} from '../constants/const'

export const deleteTodo = todo => {
    return {
        type : DELETE_TODO,
        todo
    }
}

export const pagination = page => {
    return {
        type : PAGINATION,
        page
    }
}

export const setTodo = todo => {
    return {
        type : SET_TODO,
        todo
    }
} 

export const addTodo = todo => {
    return {
        type : ADD_TODO,
        todo
    }
}

export const updateTodo = todo => {
    return {
        type : UPDATE_TODO,
        todo
    }
}

export const setAction = action => {
    return {
        type : SET_ACTION,
        action
    }
}

export const setResult = result => {
    return {
        type : RESULT,
        result
    }
}