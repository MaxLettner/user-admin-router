import User from './User.tsx'
import * as userService from '../services/user.service.ts'
import type UserIF from '../services/user.service.ts'

const UserList = () => {
    const users = userService.getUsers()

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
                    <User key={index} user={user}/>
                ))}
            </tbody>
        </table>     
        </>
    )
}

export default UserList