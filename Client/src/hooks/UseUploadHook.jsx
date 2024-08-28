import axios from "axios";

const useupload=async({image,onUploadProgress})=>{
 const upload= async ()=>{
    try {
        const formData= new FormData();
        formData.append("file",image);
        formData.append("upload_preset",import.meta.env.VIT_CLOUDINARY_UPLOAD_PRESET);
        formData.append("api_key",import.meta.env.VIT_CLOUDINARY_API_KEY);
        const config ={
        headers:{
            "content-Type":"multipart/form-data",
            onUploadProgress,
            withCreadentials:false,
        }
      }
        const res  = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VIT_CLOUDINARY_CLOUD_NAME}/image/upload`);
        const data = await res.data;
        if(!data) return toast.error("upload field !");
        return data ;
    } catch (error) {
        return error.message
    }
 }
 const {public_id ,secure_url}= await upload();
 return {public_id,secure_url};
}
export default useupload