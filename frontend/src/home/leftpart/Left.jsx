import React from 'react'
import Search from './Search.jsx'
import Users from './Users.jsx'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='bg-black w-[30%] h-screen text-white' >

        <Search/>
        <Users/>
        <Logout/>
    </div>
  )
}

export default Left
