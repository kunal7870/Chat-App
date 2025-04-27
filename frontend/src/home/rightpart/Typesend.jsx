import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../context/useSendMessage.js';
import useGetMessage from '../../context/useGetMessage.js';

const Typesend = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();
  const { getMessages } = useGetMessage();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message)
    setMessage("")  //clear input feild , after sending message 
    getMessages(); 
  }
  

  return (
    <form onSubmit={handleSubmit}>

      <div className='flex gap-4 items-center h-[10vh] justify-top pl-5 bg-slate-800'>
        <input
          type="text"
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input border border-slate-700 w-full max-w-lg" />
        <button>
          <IoMdSend className="text-3xl" />
        </button>

      </div>
    </form>
  )
}

export default Typesend
