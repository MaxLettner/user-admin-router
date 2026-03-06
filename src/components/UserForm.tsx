import { useNavigate, useParams } from 'react-router'
import { useState } from "react"
import type UserIF from "../services/user.service"
import { uid } from 'uid'

const UserForm = () => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    let navigate = useNavigate()
    const id = useParams()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(name != '') {
            const user: UserIF = {id: uid(), userName: name, role:  Number(role)}

            resetInput()
        }
    }

    const resetInput = () => {
        setName('')
        setRole('')
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input className="form-control" type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Fill in Name" required/>
            
            <label htmlFor="role">Rolle</label>
            <select className="form-select mb-3" name="role" id="role" value={role} onChange={(event) => setRole(event.target.value)} required>
                <option value="">Select Role</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
                <option value="3">Generic</option>
            </select>

            <button className="btn btn-outline-secondary" type="submit">Add</button>
        </form>
    )
}

export default UserForm