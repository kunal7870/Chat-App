import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/right.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
const App = () => {
  return (
    <div className='flex flex-col '>
      {/* <Left/>
      <Right/> */}
      <Signup />
      {/* <Login/> */}
    </div>
  )
}

export default App
