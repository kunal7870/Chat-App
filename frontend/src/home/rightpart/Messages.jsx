import React, { useEffect, useRef } from 'react'

import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx';
import Message from './Message.jsx';
import useGetSocketMessage from '../../context/useGetSocketMessage.js';
const Messages = () => {
    const {loading,messages} = useGetMessage();

    useGetSocketMessage(); //listen incoming messages
    // console.log(messages)

    const lastMsgRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            if(lastMsgRef.current){
                lastMsgRef.current.scrollIntoView({behavior: "smooth"});
            }
        }, 100);
    },[messages])

    return (
        <div className='overflow-y-auto h-[80vh] scroller' style={{maxHeight:"calc(80vh-20vh)"}}>

            {loading?(<Loading/>):(messages.length > 0 && messages.map((message) =>(
              <div key={message._id} ref={lastMsgRef}>
              <Message message={message} />
            </div>
            )))}

           {!loading && messages.length === 0 && (
            <div>
                <p className='text-center mt-[20%]'>Say Hi! to start the Conversation</p>
            </div>
           )}
        </div>
    )
}

export default Messages
