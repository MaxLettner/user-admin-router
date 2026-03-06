import User from './User.tsx'
import * as userService from '../services/user.service.ts'
import type UserIF from '../services/user.service.ts'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const UserList = () => {
    const [users, setUsers] = useState(userService.getUsers())

    let navigate = useNavigate()

    const handleDelete = (user: UserIF) => {
        userService.deleteUser(user)
        setUsers(userService.getUsers())
    }

    return (
        <>
            <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody className="users">
                {users.map((user, index) => (
                    <User key={index} user={user} onDelete={handleDelete}/>
                ))}
            </tbody>
        </table>   
        <button className='btn btn-primary' onClick={() => {navigate('/form')}}>New User</button>  
        </>
    )
}

export default UserList