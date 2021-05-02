import React from 'react'

class AddTodo extends React.Component {
    render() {
        return (
            <div className='col-sm-6'>
                <div className='card text-light p-2 mb-5' style={{ backgroundColor: '#282C34' }}>
                    <form>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h5>Todo</h5>
                                <h5 className='text-muted'>Enter todo infomation</h5>
                            </div>
                            <div className='col-md-6 text-end'>
                                <button className='btn btn-dark p-1'>Save</button>
                            </div>
                        </div>
                        <br></br>
                        <label className='form-lable'>Todo</label>
                        <input className='form-control text-light' style={{ backgroundColor: '#21252B', border: 'none' }}></input>
                        <br></br>
                        <label className='form-lable'>Status</label>
                        <select className='form-control text-light mb-4' style={{ backgroundColor: '#21252B', border: 'none' }}>
                            <option>Complete</option>
                            <option>Incomplete</option>
                        </select>
                    </form>
                </div>
                <div className="rounded border border-primary p-3">
                    <span style={{ color: '#0D6EFD' }}>Add success !</span>
                </div>
            </div>
        )
    }
}

export default AddTodo;