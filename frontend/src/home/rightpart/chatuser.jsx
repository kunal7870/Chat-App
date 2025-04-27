import React from 'react'
import useConversation from '../../zustand/useConversation'

const chatuser = () => {
    const { selectedConversation } = useConversation(); //to get current selected user
    return (

        <div className='h-[10vh] bg-slate-800 flex gap-4 justify-center items-center hover:bg-slate-700 duration-300'>
            <div className="avatar online">
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1 className='text-lg'>kunal</h1>
                <span className='text-sm'>offline</span>
            </div>

        </div>
    )
}

export default chatuser
