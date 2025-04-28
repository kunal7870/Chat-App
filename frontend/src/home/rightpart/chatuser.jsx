import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';
import { CiMenuFries } from 'react-icons/ci';


const chatuser = () => {
    const { selectedConversation } = useConversation(); //to get current selected user
    const {onlineUsers} = useSocketContext();
    const getOnlineUserStatus=(userId)=>{
        return onlineUsers.includes(userId)?"online":"offline"
    }
    return (
        <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>

        <div className='h-[10vh] bg-slate-800 flex gap-4 justify-center items-center hover:bg-slate-700 duration-300'>
            <div className="avatar avatar">
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1 className='text-lg'>{selectedConversation.fullname}</h1>
                <span className='text-sm'>{getOnlineUserStatus(selectedConversation._id)}</span>
            </div>

        </div>
        </div>
    )
}

export default chatuser
