import React from 'react'

const User = () => {
  return (  
      <div className='flex bg-gray-900 items-center gap-5 mx-2 my-2 rounded-s hover:bg-slate-800 duration-300 cursor-pointer'>
                <div className="avatar online ml-2 p-1">
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>kunal</h1>
                    <span>kunal@afngmail.com</span>
                </div>
            </div>
  )
}

export default User
