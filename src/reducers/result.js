import {
    RESULT
} from '../constants/const'

const result = {
    active : false,
    status : false,
}

const myReducer = (state = result, action) => {
    switch(action.type){
        case RESULT : 
            return action.result
        default: return state
    }
}

export default myReducer