

import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {

 

  return (
    <div className="navbar sticky top-0 z-10 bg-white border-b bg-opacity-30 border-gray-200 backdrop-filter backdrop-blur-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link to='/home'>Home</Link>
            <Link to='/Aboutus'>Aboutus</Link>
            <Link to='/Contactus'>Cotactus</Link>
          </ul>
        </div>
        <a > </a>
        <Link to='/' className="btn btn-ghost  text-2xl font-bold">Pic-Cart</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-bold font-mono ">
          <li>  <Link to='/home' className='mx-2'>Home</Link> </li>
          <li> <Link to='/Aboutus'>Aboutus</Link></li>
          <li> <Link to='/Contactus'>Cotactus</Link></li>
        </ul>
      </div>
      <div className="navbar-end">

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <Link to='/signup'><button className="btn btn-sm btn-primary me-4" >signup</button></Link>
        <Link to='/login'><button className="btn btn-sm btn-outline btn-primary  me-4" >login</button></Link>

      </div>
  
    </div>
  )
}

export default Header