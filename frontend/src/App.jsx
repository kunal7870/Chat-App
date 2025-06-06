import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/right.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import { useAuth } from './context/Authprovider.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading.jsx'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (

    <>
      <Routes>
        <Route path="/" element={
          authUser ? (
            <div className="drawer lg:drawer-open">
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu w-80 min-h-full bg-black text-base-content">
                    <Left />
                  </ul>
                </div>
              </div>
          ) : (<Navigate to={"/login"} />)
        } />

        <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <Signup />} />
        <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path='/logout' element={authUser ? <Navigate to={"/"} /> : <Login />} />
      </Routes>
      <Toaster />
    </>
    // <Loading/>
  )
}

export default App
