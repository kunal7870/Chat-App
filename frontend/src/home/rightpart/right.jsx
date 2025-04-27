import React, { useEffect } from 'react'
import Chatuser from './chatuser'
import Messeges from './Messages.jsx'
import Typesend from './Typesend'
import useConversation from '../../zustand/useConversation'
import Loading from '../../components/Loading'
import { useAuth } from '../../context/Authprovider'

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='bg-slate-900 text-white  w-[70%] h-screen'>
      {!selectedConversation ? (<NoChatSelected/>) : (<div>
        <Chatuser />
        <Messeges />
        <Typesend />


      </div>)}

    </div>
  )
}

export default Right

const NoChatSelected = () =>{
  const [authUser] = useAuth();
 
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-center'>Welcome <span className='font-semibold'>{authUser.useri.fullname}</span>
      <br />
      No chat selected please select any chat to start conversation
      </h1>
    </div>
    </>
  )
}