import React from 'react'
import User from './User'

const Users = () => {
    return (
        <div>
            <h1 className='mx-1 w-[98%] px-8 py-2  rounded-md bg-gray-700'>Messages</h1>
            <div className="scroller overflow-y-auto  ml-2" style={{maxHeight: "calc(84vh - 10vh)"}}>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
        </div>
    )
}

export default Users
