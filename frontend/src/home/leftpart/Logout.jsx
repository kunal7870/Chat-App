import React from 'react'
import { CiLogout } from "react-icons/ci";
const Logout = () => {
    return (
        <div className='h-[10vh]'>
            <div >
                <CiLogout className='text-7xl p-2 ml-4 cursor-pointer rounded-full hover:bg-slate-600'/>
            </div>
        </div>
    )
}

export default Logout
