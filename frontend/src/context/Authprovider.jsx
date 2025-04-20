import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

const Authprovider = ({children}) => {
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");

    //parse the user data and store in state
    const [authUser, setAuthUser] = useState(initialUserState? JSON.parse(initialUserState): undefined);

  return (
    <Authprovider.Provider value={[authUser, setAuthUser]}>
        {children}
    </Authprovider.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext);
