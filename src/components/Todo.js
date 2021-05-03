import React from 'react'

class Todo extends React.Component {

    deleteTodo = () => {
        this.props.deleteTodo(this.props.todo);
    }

    edit = () => {
        this.props.setResult({
            active : false,
            status : false
        })
        this.props.setAction(0);
        this.props.setTodo(this.props.todo);
    }

    render() {
        var {todo, ind} = this.props;
        return (
            <tr>
                <td>{ind+1}</td>
                <td>{todo.name}</td>
                <td className='text-center'>
                    <div className="form-check form-switch text-center">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked={todo.status}/>
                    </div>
                </td>
                <td className='text-center'>
                    <button className='btn btn-dark p-1 me-1'
                        onClick={this.edit}
                    >Edit</button>
                    <button className='btn btn-dark p-1'
                        onClick={this.deleteTodo}
                    >Dele</button>
                </td>
            </tr>
        )
    }
}

export default Todo;