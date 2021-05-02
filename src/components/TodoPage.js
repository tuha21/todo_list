import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class TodoPage extends React.Component {
    render() {
        return (
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='row'>
                            <AddTodo/>
                            <TodoList/>
                        </div>
                    </div>
                    <div className='col-md-2'></div>    
                </div>
            </div>
        )
    }
}

export default TodoPage;