import React from 'react'

const Message = ({message}) => {
    const authUser = JSON.parse(localStorage.getItem("ChatApp"));
    const itsMe = message.senderId === authUser.useri._id;
    // console.log(message.senderId);
    // console.log(authUser.useri._id);
    const chatName =  itsMe?"chat-end":"chat-start"
    const chatColor = itsMe?"bg-blue-600":""

    const createdAt = new Date(message.createdAt)
    const formattedTime = createdAt.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    })
    return (
        <div className='p-6 '>
            <div className={`chat ${chatName}`}>
                <div className={`chat-bubble  text-white ${chatColor}`}>{message.message}</div>
                <div className='chat-footer font-light px-4'>{formattedTime}</div>
            </div>
            
        </div>
    )
}

export default Message
