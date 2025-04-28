import React from 'react'
import useConversation from '../../zustand/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';

function User({ user }) {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const {socket, onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(user._id)
    return (
        <div className={`hover: bg-slate-700 duration-300 ${isSelected ? "bg-slate-800" : ""
            }`}
            onClick={() => setSelectedConversation(user)}
        >

            <div className='flex items-center gap-5  my-2 rounded-s hover:bg-slate-800 duration-300 cursor-pointer'>
                <div className={`avatar ${isOnline?"avatar-online":""} ml-2 p-1`}>
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>{user.fullname}</h1>
                    <span>{user.email}</span>
                </div>
            </div>
        </div>
    )
}

export default User
