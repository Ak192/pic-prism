import React from 'react'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [accountType, setAccountType] = useState('');

  const navigate= useNavigate();
  const signupHandler = async (event) => {
    event.preventDefault()
    

    const data = { username, email, password, accountType };
    
    console.log(data);
    try {

      const res = await axios.post(import.meta.env.VITE_API_URL+"/signup", data);
      console.log(res);
      const resp = await res.data;
      console.log(resp);
      if (resp.success==true) {
        setUsername("");
        setEmail(""); 
        setPass("");
        setAccountType("");
       await toast.success(resp.message);
        navigate("/login");
      }

    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);


    }
  }
  return (
    <>
      <div>
        <div className="card glass w-96 m-auto my-4">

          <div className="card-body">
            <form className='' onSubmit={signupHandler} >


              <h3 className="font-bold text-lg text-center">Signup </h3>
              {/* form  */}

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
                <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
                <input type="password"  placeholder='********' value={password} onChange={(e) => setPass(e.target.value)} />
              </label>
              <select onChange={(e) => setAccountType(e.target.value)} className="select select-bordered select-sm w-full gap-2 mb-2">
               <option value=""disabled selected >Account Type</option>
                <option value='Buyer'>Buyer</option>
                <option value='Saller' >Saller</option>

              </select>
              <button className="btn btn-wide btn-primary w-full">Signin Now</button>
            </form>

          </div>
        </div>
      </div>


      <Toaster />

    </>
  )
}

export default Signin