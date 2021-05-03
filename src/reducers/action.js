import {
    SET_ACTION
} from '../constants/const'

const add_update = 1;

const myReducer = (state = add_update, action) => {
    switch(action.type) {
        case SET_ACTION : 
            return action.action
        default: return state
    }
}

export default myReducer