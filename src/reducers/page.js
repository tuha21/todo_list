import { PAGINATION } from '../constants/const'


const page = 0

const myReducer = (state = page, action) => {
    switch(action.type){
        case PAGINATION : 
            return action.page
        default: return state
    }
}

export default myReducer