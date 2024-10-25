import React, { useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = () => {

  const [users,setUsers] = useState([
    {
      Name : "Richa",
      Email : "Richa13@gmail.com",
      Age: 24
    }
  ])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
     <div className='w-50 bg-white rounded p-3'>
      <Link to={'/create'} className='btn btn-success'>Add +</Link>
      <table>
        <thead className='table'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
             return <tr>
                <td>{user.Name}</td>
                <td>{user.Age}</td>
                <td>{user.Email}</td>
                <td>
                <Link to={'/update'} className='btn btn-success'>Edit</Link>
                  <button>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
     </div>
    </div>
  )
}

export default Form
