import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeshboardHeader from './DeshboardHeader';
import ImageAdd from './ImageAdd';
const PhotoManagement = () => {
    const posts = useSelector((state)=>state.posts.myPosts);
    const dispatch=useDispatch();

    const getMyPosts =async()=>{
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <div className='flex flex-col sm:flex-row'>
            {/* Deshboardheader will be here */}
            <DeshboardHeader />
            {/* Image add component will be  here */}
            <ImageAdd />
            
        </div>
    )
}

export default PhotoManagement