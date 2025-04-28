import React, { useState } from 'react'
import useConversation from '../../zustand/useConversation';
import useGetAllUsers from '../../context/useGetAllUsers';
import { toast } from 'react-hot-toast';


const search = () => {
    const [search,setSearch] = useState("");
    const {setSelectedConversation } = useConversation();
    const [allUsers] = useGetAllUsers();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        console.log(allUsers.allUsers);
        const conversation = allUsers.allUsers.find((useri) =>
          useri.fullname?.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
            setSelectedConversation(conversation);
            setSearch("")
        } else {
            toast.error("no user found")

        }
    }
    return (
        <div className='h-[8vh]'>
            <form onSubmit={handleSubmit}>
                <label className="input m-5 border-none flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </form>
        </div>

    )
}

export default search
