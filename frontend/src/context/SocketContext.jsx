import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./Authprovider";
import { io } from "socket.io-client";

const socketContext = createContext();
//hook
export const useSocketContext = ()=>{
    return useContext(socketContext);
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [authUser] = useAuth();

    useEffect(() => {
        if (authUser) {
            const socket = io("https://chat-app-backend-zldy.onrender.com",{
                query:{
                userId: authUser.useri._id
            }
            })
            setSocket(socket)
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users)
            })
            return()=> socket.close();
        } else {
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    },[authUser]);

    return (
        <socketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </socketContext.Provider>
    )
}