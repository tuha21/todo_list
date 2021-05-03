import {connect} from 'react-redux'
import * as actions from '../actions/index'
import AddTodo from '../components/AddTodo'


const mapStateToProps = state => {
    return {
        todoData : state.todoData,
        action : state.action,
        result : state.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTodo : todo => {
            dispatch(actions.setTodo(todo));
        },
        addTodo : todo => {
            dispatch(actions.addTodo(todo))
        },
        updateTodo : todo => {
            dispatch(actions.updateTodo(todo))
        },
        setAction : action => {
            dispatch(action.setAction(action))
        },
        setResult : result => {
            dispatch(actions.setResult(result))
        }
    }
}

const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodoContainer