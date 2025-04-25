import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/right.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import { useAuth } from './context/Authprovider.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (

    <Routes>
      <Route path="/" element={
        authUser ? (
          <div className='flex flex '>
            <Left />
            <Right />

          </div>) : (<Navigate to = {"/login"}/>)
      } />

      <Route path='/signup'  element={authUser ? <Navigate to={"/"}/> : <Signup />} />
      <Route path='/login' element={authUser ? <Navigate to={"/"}/> : <Login />} />
      <Route path='/logout' element={authUser ? <Navigate to={"/"}/> : <Login />} />
    </Routes>
  )
}

export default App
