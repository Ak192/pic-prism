import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RiMenu3Fill} from 'react-icons/ri'
import { IoClose } from 'react-icons/io5';
import { togglesidebar } from '../../../store/slices/navSlice';
const DeshboardHeader = () => {
  
  const author = useSelector((state)=>state.auth.author);
  const role= useSelector((state)=>state.auth.role);
  const sidebar =useSelector((state)=>state.nav.Sidebar)
  const dispatch = useDispatch();
  
  return (
    <>
    <div className='my-5 mx-8'>
     <h1 className='text-3xl font-bold'>Hello {author.charAt(0).toUpperCase()+author.slice(1)},</h1>
     <p>Wellcome to your {role} deshboard</p>
    </div>
     {/* Humburger icon just for phone  */}
    <RiMenu3Fill onClick={()=>dispatch(togglesidebar())} className={`${sidebar === true ? "hidden":"block sm:hidden"} text-3xl absolute top-5 right-5`} />
    <IoClose  onClick={()=>dispatch(togglesidebar())} className={`${sidebar === true ? "block sm:hidden":"hidden"} text-3xl absolute top-5 right-5 `}  />
    </>
  )
}

export default DeshboardHeader