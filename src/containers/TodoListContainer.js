import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import * as actions from '../actions/index'
const mapStateToProps = state => {
    return {
        todoList : state.todoList,
        page : state.page,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo : (todo) => {
            dispatch(actions.deleteTodo(todo));
        },
        pagination : (page) => {
            dispatch(actions.pagination(page));
        },
        setTodo : (todo) => {
            dispatch(actions.setTodo(todo));
        },
        setAction : action => {
            dispatch(actions.setAction(action))
        },
        setResult : result => {
            dispatch(actions.setResult(result))
        }
    }
}

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default TodoListContainer