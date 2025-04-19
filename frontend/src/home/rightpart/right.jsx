import React from 'react'
import Chatuser from './chatuser'
import Messeges from './messages'
import Typesend from './Typesend'

const Right = () => {
  return (
    <div className='bg-slate-900 text-white  w-[70%] h-screen'>
        <Chatuser/>
        <Messeges/>
        <Typesend/>


    </div>
  )
}

export default Right
