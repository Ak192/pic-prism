import axios from "axios";

const UseUploadHook=async({image,onUploadProgress})=>{
 
 const upload= async ()=>{

    try {
        const formData= new FormData();
        formData.append("file",image);
        formData.append("upload_preset",import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        formData.append("api_key",import.meta.env.VITE_CLOUDINARY_API_KEY);
        const config ={
        headers:{
            "Content-Type": "multipart/form-data",
         
        },onUploadProgress,
        withCreadentials:false,
      }
        const res  = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,formData,config);
        const data = await res.data;
        console.log(data);
        if(!data) return toast.error("upload field !");
        return data ;
    } catch (error) {
       console.log(error);

    }
 }
 const {public_id ,secure_url}= await upload();
 return {public_id,secure_url};
}
export default UseUploadHook