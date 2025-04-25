import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Logout () {
    const[loading,setloading] = useState(false);
    const handleLogout = async () => {
      setloading(false);
      try {
        const res = await axios.post("/api/user/logout")
        localStorage.removeItem("ChatApp");
        Cookies.remove("jwt");
        alert("logged out succesfully");
        window.location.reload();
      } catch (error) {
        console.log({error: "error in logout", error});
      }
    };

    return (
        <div className='h-[10vh]'>
            <Link to={"/logout"} >
                <CiLogout className='text-7xl p-2 ml-4 cursor-pointer rounded-full hover:bg-slate-600' onClick={handleLogout}/>
            </Link>
        </div>
    )
}

export default Logout
