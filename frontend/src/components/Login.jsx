import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useAuth } from '../context/Authprovider'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

function Login () {
    const [authUser, setAuthUser] = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
            
        };
        // console.log(userInfo);
        axios
            .post("/api/user/login", userInfo)
            .then((response) => {
                // console.log(response.data);
                if(response.data){
                    toast.success("login successfull")

                }
                localStorage.setItem("ChatApp",JSON.stringify(response.data))
                setAuthUser(response.data)
            })
            .catch((error) => {
                if(error.response){
                    toast.error("Error:" + error.response.data.error);
                }
            })
    }
    return (
        <>
            <div className='flex h-screen w-screen justify-center items-center'>

                <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2 flex-col border border-white rounded-md p-6 w-1/4'>
                    <h1 className='text-2xl text-center'>Chat <span className='text-green-500 font-semibold'> App</span> </h1>
                    <h2 className='p-2 font-bold'>Login</h2>

                    
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })} />
                    </label>
                    {errors.email && <span className='text-red-400 text-xs'>email is required</span>}
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="password" {...register("password", { required: true })} />
                    </label>
                    {errors.password && <span className='text-red-400 text-xs'>password is required</span>}

                    
                    {/* Text feild */}
                    <div className='flex gap-4 flex-col items-center my-3'>
                    <h1>New user ?<Link to="/signup" className='text-blue-400 underline ml-2 cursor-pointer '>Signup</Link> </h1>
                        <input type="submit" value="Login" className='bg-green-700 rounded-md px-2 py-1 cursor-pointer' />

                    </div>


                </form>
            </div>
        </>
    )
}

export default Login
