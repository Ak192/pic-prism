import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoLogOut } from 'react-icons/io5'
import { IoMdPhotos } from 'react-icons/io'
import {AiFillHome} from'react-icons/ai'
import { IoIosHeart } from 'react-icons/io'
import {FaList} from'react-icons/fa'
import { SiGoogleanalytics } from 'react-icons/si'
import { Link, useLocation } from 'react-router-dom'
import { setTab } from '../../store/slices/navSlice'
import { logout } from '../../store/slices/authSlice'
const DeshboardSidebar = () => {
    const { pathname } = useLocation();
    const dispatch =useDispatch();

    const author = useSelector((state) => state.auth.author);
   const tab= useSelector((state)=>state.nav.tab);
   const sidebar =useSelector((state)=>state.nav.Sidebar);
  
    return (
        <nav className={` fixed z-10 flex text-lg ${!sidebar==true ? "-translate-x-[500px] sm:translate-x-0":"translate-x-0"} ease-in-out duration-300 flex   font-semibold bg-white flex-col gap-2 w-fit min-h-screen border-top-2 p-3 list-none justify-between items-center shadow-[#9E9EA6_0px_0px_20px]`}>

            <div>
                {/* circle with my name first latter */}
                <div className='bg-black my-5 w-fit rounded-full py-4 px-6 text-white'>
                    {author.charAt(0).toUpperCase()}
                </div>

                {/* list Items */}
                <div className='flex flex-col gap-2'>{
                    pathname === "/profile/Saller" ? (<li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all
                    ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${tab === "photos-management" && "bg-black text-white"} `}
                    onClick={()=>dispatch(setTab("photos-management"))}
                    ><IoMdPhotos /> Photos Mangement</li>
                    ) : (<li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all
                    ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${tab=== "photos-purchased" && "bg-black text-white"}`} onClick={()=>dispatch(setTab("photos-purchased"))}> <IoMdPhotos /> Photos Purchased </li>
                    )}
                    <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all
                    ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${tab === "analytics" && "bg-black text-white" } `} onClick={()=>dispatch(setTab("analytics"))}> <SiGoogleanalytics /> Analytics
                     </li>
                     <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all
                    ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center  ${tab === "orders" && "bg-black text-white"}`}onClick={()=>dispatch(setTab("orders"))} > <FaList /> Orders
                     </li>
                     <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all
                    ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${tab === "favourites" && "bg-black text-white"} `} onClick={()=>dispatch(setTab("favourites"))} > <IoIosHeart /> Favourites
                     </li>
                     <Link to='/' className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all
                    ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${tab=== "home" && "bg-black text-white "}`} onClick={()=>dispatch(setTab("home"))}> <AiFillHome /> Home
                     </Link>
                </div>
            </div>

            {/* Logout Button */}
            <li className='w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all
             ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'onClick={()=>dispatch(logout())} > <IoLogOut /> Logout</li>
        </nav>
    )
}

export default DeshboardSidebar