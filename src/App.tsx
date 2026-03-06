
import { Routes, Route } from 'react-router'
import './App.css'
import UserList from './components/UserList.tsx'
import UserForm from './components/UserForm.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<UserList/>}></Route>
        <Route path='/form' element={<UserForm/>}></Route>
        <Route path='/form/:id' element={<UserForm/>}></Route>
      </Routes>
    </>
  )
}

export default App
