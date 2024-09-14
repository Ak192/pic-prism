
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import UseUploadHook from '../../hooks/UseUploadHook';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProgressBar from '@ramonak/react-progress-bar'
const ImageAdd = ( getMyPosts) => {
  const [image,setImage]=useState(null);
  const [progress,setProgress]=useState(0);
  const author=useSelector((state)=>state.auth.author);
  const handlerImageChange=(e)=>{
   const file = e.target.files[0];
  setImage(file);
  
  }
  const onUploadProgress =  (ProgressEvent)=>{
    setProgress(Math.round((ProgressEvent.loaded *100)/ ProgressEvent.total));
  }
  const addaPost= async(e)=>{
    
    e.preventDefault();
  try{
   
    const title= e.target.title.value;
    const price = e.target.price.value;
    if(!title || !price) return toast.error("please fill all the field !");
    if(title.trim===" " || price.trim ===" ")return toast.error("please fill all the field !")
    const  {public_id,secure_url}= await UseUploadHook({image,onUploadProgress});
    console.log(  {title,price,image:secure_url,publicId:public_id, author});
    const res= await axios.post(import.meta.env.VITE_API_URL+"/post/create",
      {title,price,image:secure_url,publicId:public_id, author},
      {headers:{
        authorization:"Bearer "+localStorage.getItem("accessToken"),
      }}
    );
    const data = await res.data;
    if(data.success == true){
      toast.success(data.message);
      e.target.reset();
      setImage(null);
      setProgress(0);
       getMyPosts();
    }
    }
    catch(error){  
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='p-5 bg-white mx-9 rounded-2xl shadow-md'>
    <h2 className='text-xl font-bold'>Add New Product</h2>
    <form  className='grid grid-cols-1 gap-2 my-4' onSubmit={addaPost}>
     <img src={` ${image ? URL.createObjectURL(image):"https://dummyimage.com/600x400/d4d4d4/fff.png&text=NO+Image"}`} alt="Image" className='w-[350px] sm:h[30vh] rounded-lg object-cover' />
    {/*show a progress Bar  */}
     {progress > 0 &&
       <ProgressBar completed={progress} bgColor='black' transitionTimingFunction='ease-in-out' />
     }
     <div className="flex flex-col">
      <label htmlFor="Image" className='font-bold'>Image</label>
      <input type="file" name='image' id='image' onChange={handlerImageChange}  className='round-lg border outline-none px-3 py-1 mt-1' />
      <label htmlFor="Title" className='font-bold'>Title</label>
      <input type="text" name='title'   className='round-lg border outline-none px-3 py-1 mt-1' placeholder='Beatifull Flower' />
      <label htmlFor="Price" className='font-bold'>Price</label>
      <input type="number" name='price' className='round-lg border outline-none px-3 py-1 mt-1' placeholder='$ 45'/>
      <button  className='bg-slate-900 text-white py-1 px-3 mt-1 border rounded-lg '>submit</button>
     
     </div>
    </form>
    <Toaster/>
    </div>
  )
}

export default ImageAdd