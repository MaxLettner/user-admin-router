import type UserIF from "../services/user.service"

interface Props {
    user: UserIF
}

const User = ({user}: Props) => {
    
    return(
        <tr>
            <td>{user.id}</td>
            <td>
                <span className="me-2">{user.userName}</span>
            </td>
            <td>
                <select className="form-control form-control-sm" name="roles" id="roles" value={user.role} disabled>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                    <option value="3">Generic</option>
                </select>
            </td>
            <td>
                <button className="btn btn-outline-primary me-2"><i className="bi bi-pencil"></i></button>
                <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default User