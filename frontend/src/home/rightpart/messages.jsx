import React from 'react'

import Message from './message'
const messeges = () => {
    return (
        <div className='overflow-y-auto h-[80vh] scroller' style={{maxHeight:"calc(80vh-20vh)"}}>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
          
        </div>
    )
}

export default messeges
