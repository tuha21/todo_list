import React from 'react'

class AddTodo extends React.Component {



    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var todo = {
            id: this.props.todoData.id,
            name: name === 'name' ? value : this.props.todoData.name,
            status: name === 'status' ? value === 'true' ? true : false : this.props.todoData.status
        }
        this.props.setTodo(todo)
    }

    onSave = (event) => {
        event.preventDefault();
        if (this.props.todoData.name === '') {
            this.props.setResult({
                active : true,
                status : false
            })
        }
        else {
            this.props.setResult({
                active : true,
                status : true
            })
            this.props.action === 0 ? this.props.updateTodo(this.props.todoData) : this.props.addTodo(this.props.todoData)
        }
        
    }

    render() {
        var { todoData, action, result } = this.props
        var {active, status } = result

        var alert = active ? 
            <div className={status ? "rounded border border-primary p-3" : "rounded border border-danger p-3"}>
                <span style={{ color: status ? '#0D6EFD' : '#E06C66' }}>
                    {status ? 'Complete !' : 'Invalid !'}
                </span>
            </div> : ''

        return (
            <div className='col-sm-6'>
                <div className='card text-light p-2 mb-5' style={{ backgroundColor: '#282C34' }}>
                    <form>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h5>Todo</h5>   
                                <h5 className='' style={{ color : '#0D6EFD'}}>
                                    {action === 0 ? 'Update todo' : 'Add todo'}
                                </h5>
                            </div>
                            <div className='col-md-6 text-end'>
                                <button className='btn btn-dark p-1'
                                    onClick={this.onSave}
                                >Save</button>
                            </div>
                        </div>
                        <br></br>
                        <label className='form-lable'>Todo</label>
                        <input className='form-control text-light' style={{ backgroundColor: '#21252B', border: 'none' }}
                            name='name' value={todoData.name}
                            onChange={this.onChange}
                        ></input>
                        <br></br>
                        <label className='form-lable'>Status</label>
                        <select className='form-control text-light mb-4' style={{ backgroundColor: '#21252B', border: 'none' }}
                            name='status' value={todoData.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Complete</option>
                            <option value={false}>Incomplete</option>
                        </select>
                    </form>
                </div>

                {alert}

            </div>
        )
    }
}

export default AddTodo;

//E06C66