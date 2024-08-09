import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import{login} from'../../store/slices/authSlice';
import {useDispatch}from 'react-redux'

const Login = () => {
  const [email ,setEmail]=useState('');
  const [password,setPass]=useState('');
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const loginHandler=async(e)=>{
    e.preventDefault();
  const data={email,password};
  try {
  const res= await axios.post(import.meta.env.VITE_API_URL+"/login",data);
  const resp= await res.data ;
  console.log(`/profile/${resp.role}`);
  console.log(resp);
    if(resp.success=true){
      setEmail("");
      setPass("");
      await  toast.success(resp.message);
      dispatch(login(resp));
      navigate(`/profile/${resp.role}`);
    }
  } catch (err) {
    setPass("");
   toast.error(err.response.data.message);
     
  }
  

  }

  return (
    <div>
      <div className="card glass w-96 m-auto my-4">

        <div className="card-body">
          <form onSubmit={loginHandler}>
            {/* if there is a button in form, it will close the modal */}


            <h3 className="font-bold text-lg">LogIn</h3>
            {/* form */}

            <label className="input input-bordered flex items-center gap-2 my-2">
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
              <input type="text"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
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
              <input type="password" placeholder='********' value={password} onChange={(e)=>setPass(e.target.value)} />
            </label>
            <button className="btn btn-wide  btn-outline btn-secondary w-full">LogIn Now</button>
          </form>
        </div>
      </div>
     <Toaster/>
    </div>
  )
}

export default Login