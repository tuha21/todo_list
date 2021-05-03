import { Component } from 'react';
import PropsTypes from 'prop-types'
import Todo from './Todo'
import _ from 'lodash'

class TodoList extends Component {

    nextPage = () => {
        var max = Math.ceil(this.props.todoList.length / 5);
        if (this.props.page < max - 1) {
            this.props.pagination(this.props.page + 1)
        }
    }

    prevPage = () => {
        if (this.props.page > 0)
            this.props.pagination(this.props.page - 1)
    }

    setAction = () => {
        this.props.setResult({
            active : false,
            status : false
        })
        this.props.setAction(1);
    }

    render() {
        var { todoList } = this.props;
        var todos = _.chunk(todoList, 5);
        var element = <tr><td colSpan='4' className='text-center'>No todo in page {this.props.page + 1}</td></tr>
        if (todos[this.props.page]) {
            element = todos[this.props.page].map((val, ind) => {
                return <Todo key={ind}
                    todo={val}
                    ind={ind}
                    deleteTodo={this.props.deleteTodo}
                    setTodo={this.props.setTodo}
                    setAction={this.props.setAction}
                    setResult={this.props.setResult}
                />
            })
        }
        return (
            <div className='col-sm-6'>
                <div className='card text-light p-2' style={{ backgroundColor: '#282C34' }}>
                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Todo</th>
                                <th>Status</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {element}
                        </tbody>
                    </table>
                    <div className='row'>
                        <div className='col-md-4'>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <button className="border-0 bg-dark page-link" aria-label="Previous"
                                            onClick={this.prevPage}
                                        >
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link bg-dark border-0" >
                                            {this.props.page + 1}
                                        </button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link bg-dark border-0" aria-label="Next"
                                            onClick={this.nextPage}
                                        >
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-md-4 text-center'>
                            {/* <input type='text' className='bg-dark form-control border-0 text-light' placeholder='todo name...'></input> */}
                        </div>
                        <div className='col-md-4 text-end'>
                            <button className='btn btn-dark'
                                onClick={this.setAction}
                            >+ Add todo</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TodoList.propTypes = {
    todoList: PropsTypes.arrayOf(PropsTypes.shape({
        id: PropsTypes.string.isRequired,
        name: PropsTypes.string.isRequired,
        status: PropsTypes.bool.isRequired
    })).isRequired,
    page: PropsTypes.number.isRequired
}

export default TodoList;