import React from 'react'

class TodoList extends React.Component {
    render() {
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
                            <tr>
                                <td>No</td>
                                <td>Todo</td>
                                <td className='text-center'>
                                    <div className="form-check form-switch text-center">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <button className='btn btn-dark p-1 me-1'>Edit</button>
                                    <button className='btn btn-dark p-1'>Dele</button>
                                </td>
                            </tr>
                            <tr>
                                <td>No</td>
                                <td>Todo</td>
                                <td className='text-center'>
                                    <div className="form-check form-switch text-center">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <button className='btn btn-dark p-1 me-1'>Edit</button>
                                    <button className='btn btn-dark p-1'>Dele</button>
                                </td>
                            </tr>
                            <tr>
                                <td>No</td>
                                <td>Todo</td>
                                <td className='text-center'>
                                    <div className="form-check form-switch text-center">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <button className='btn btn-dark p-1 me-1'>Edit</button>
                                    <button className='btn btn-dark p-1'>Dele</button>
                                </td>
                            </tr>
                            <tr>
                                <td>No</td>
                                <td>Todo</td>
                                <td className='text-center'>
                                    <div className="form-check form-switch text-center">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <button className='btn btn-dark p-1 me-1'>Edit</button>
                                    <button className='btn btn-dark p-1'>Dele</button>
                                </td>
                            </tr>
                            <tr>
                                <td>No</td>
                                <td>Todo</td>
                                <td>
                                    <div className="form-check form-switch text-center">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <button className='btn btn-dark p-1 me-1'>Edit</button>
                                    <button className='btn btn-dark p-1'>Dele</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='row'>
                        <div className='col-md-4'>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <button className="border-0 bg-dark page-link" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>
                                    <li className="page-item"><button className="page-link bg-dark border-0" >1</button></li>
                                    <li className="page-item">
                                        <button className="page-link bg-dark border-0" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-md-4 text-center'>
                            <input type='text' className='bg-dark form-control border-0 text-light' placeholder='todo name...'></input>
                        </div>
                        <div className='col-md-4 text-end'><button className='btn btn-dark'>+ Add todo</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;