import React from 'react'
import { IoMdSend } from "react-icons/io";

const Typesend = () => {
  return (
    <div className='flex gap-4 items-center h-[10vh] justify-top pl-5 bg-slate-800'>
      <input type="text" placeholder="Type here" className="input border border-slate-700 w-full max-w-lg" />
      <IoMdSend className='text-3xl cursor-pointer'/>

    </div>
  )
}

export default Typesend
