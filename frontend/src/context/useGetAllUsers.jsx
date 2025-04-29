import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

function useGetAllUsers() {
    const [allUsers, setallUsers] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {

        const getUsers = async() => {
        setloading(true);

            try {
                const token = Cookies.get("jwt")
                const response = await axios.get("/api/user/allusers", {
                    credentials: "include",
                    headers: {
                        Authorization:`Bearer ${token}`,
                    },
                });
                setallUsers(response.data)
                setloading(false);
            } catch (error) {
              console.log("Error in useGetAllusers: " + error)
            }
        };
        getUsers();
    }, []);
    return[allUsers ,loading];
    
}

export default useGetAllUsers;
