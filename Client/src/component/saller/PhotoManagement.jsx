import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeshboardHeader from './DeshboardHeader';
import ImageAdd from './ImageAdd';
import { logout } from '../../../store/slices/authSlice'
import { setMyPosts } from '../../../store/slices/postSlice'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Card from '../Card';
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from 'react-icons/md'
const PhotoManagement = () => {
    const posts = useSelector((state) => state.posts.myPosts);

    const dispatch = useDispatch();

    const getMyPosts = async () => {
        try {
            if (posts.length > 0) return ;
            const res = await axios(import.meta.env.VITE_API_URL + "/post/mypost", {
                headers: { authorization: "Bearer " + localStorage.getItem("accessToken") }
            });

            const { data } = await res.data;
            console.log(data);
            dispatch(setMyPosts(data));
        } catch (error) {
            toast.error(error.message)
            useDispatch(logout());
        }
    }
    useEffect(() => {
        getMyPosts();
    }, [])

    return (
        <>
            <div className='lg:ms-[33vh] md:ms-[19vh] sm:ms-[0vh] flex flex-col lg:flex-row bg-transparent'> 
                <div className='bg-transparent w-fit'>
                    {/* Deshboardheader will be here */}
                    <DeshboardHeader />
                    {/* Image add component will be  here */}
                    <ImageAdd  getPosts={getMyPosts} />
                </div>
                {/* section where all the all Image desplayed */}
                <div className='grid grid-col-1 lg:grid-cols-3 md:grid-col-2 gap-3  bg-transparent  mx-auto mt-5  sm:w-[95vh] rounded-lgmx-auto lg:mx-3 '>
                    {
                        posts.length &&
                        posts?.map(({ _id, title, image, author, price, }) => {


                            return (


                                <Card key={_id} id={_id} title={title} img={image} author={author} price={price}
                                    Icon1={ <BiSolidEdit title='Edit' className='text-3xl text-black  cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
                                    Icon2={<MdDelete title='Delete' className='text-3xl text-red-500  cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
                                   />
                                   
                            );
                        })
                    }
                </div>
                <Toaster />
            </div>


        </>
    )
}

export default PhotoManagement