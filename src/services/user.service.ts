import { uid } from 'uid'

export default interface UserIF {
    id?: string,
    userName: string,
    role: number
}

let users: UserIF[] = [
    {
        id: uid(),
        userName: 'Max Mustermann',
        role: 1
    },
    {
        id: uid(),
        userName: 'Eva Musterfrau',
        role: 0
    }
]

export const getUsers = () => {
    return users
}

export const getUserById = (id: String) => {
    let u : UserIF | null = null
    users.map((user) => {
        if(user.id === id) {
            u = user
        }
    })
    return u
}

export const createUser = (user: UserIF) => {
    user.id = uid()  
    users = [user, ...users]
}

export const updateUser = (user: UserIF) => {
    const index = users.findIndex(t => t.id === user.id)
    users[index] = user
    users = [...users]
}

export const deleteUser = (user: UserIF) => {
    const index = users.findIndex(t => t.id === user.id)
    users.splice(index, 1)
    users = [...users]
}