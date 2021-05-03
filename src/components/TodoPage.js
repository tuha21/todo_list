import React from 'react'
import TodoListContainer from '../containers/TodoListContainer'
import AddTodoContainer from '../containers/AddTodoContainer';

class TodoPage extends React.Component {
    render() {
        return (
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='row'>
                            <AddTodoContainer/>
                            <TodoListContainer/>
                        </div>
                    </div>
                    <div className='col-md-2'></div>    
                </div>
            </div>
        )
    }
}

export default TodoPage;