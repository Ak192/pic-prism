
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {RiMenu3Fill} from 'react-icons/ri'
import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const Header = () => {
    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
    const role = useSelector((state)=>state.auth.role);
  
  const { pathname } = useLocation();
  const [toggle,setToggle]=useState(false);
 const  togglehandler=()=>{
    console.log({toggle});
  }
  useEffect(()=>{
   return (togglehandler())
  },[toggle])
  return (
    <>
      <div className={`navbar sticky top-0 z-10 lg:justify-between   max-sm:flex-wrap  bg-white border-b bg-opacity-30 border-gray-200 backdrop-filter  backdrop-blur-lg ${pathname === "/profile/Buyer" || pathname === "/profile/Saller" ? "hidden" : "fixed"}`}>

        <Link to='/' className="btn btn-ghost  text-2xl font-bold">Pic-Cart</Link>
        <div className=" lg:flex hidden   ">
          <ul className="menu menu-horizontal px-1 gap-2 font-bold font-mono ">
            <li>  <Link to='/home' className='mx-2'>Home</Link> </li>
            <li> <Link to='/Aboutus'>Aboutus</Link></li>
            <li> <Link to='/Contactus'>Cotactus</Link></li>
          </ul>
        </div>
        <div className=" max-sm:ms-8">
          { !isAuthenticated ?(  
            <> 
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
           <Link to='/signup'><button className="btn btn-sm btn-primary me-4" >signup</button></Link>
          <Link to='/login'><button className="btn btn-sm btn-outline btn-primary  me-4" >login</button></Link>
          </> ) :
        ( <Link to={`/profile/${role}`}><button className="btn btn-sm btn-outline btn-primary ms-14  me-4" >Profile</button></Link>)
        }

          <RiMenu3Fill className={`${toggle== true ? "hidden": "block"} text-2xl  flex block  md:hidden`} onClick={()=>setToggle(true)} />
          <IoClose className={`${toggle== false ? "flex hidden": "flex block"} text-2xl  block  md:hidden `} onClick={()=>setToggle(false)} />
        </div>

        <div className={`  ${toggle== true ?"block lg:hidden m-auto":"hidden" } `}>
          <ul className="menu menu-horizontal px-1 gap-2 font-bold font-mono ">
            <li>  <Link to='/home' className='mx-2'>Home</Link> </li>
            <li> <Link to='/Aboutus'>Aboutus</Link></li>
            <li> <Link to='/Contactus'>Cotactus</Link></li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Header