import { createSlice } from "@reduxjs/toolkit";
const postSlice=createSlice({
    name:"post",

    initialState:{
        allPosts:[],
        myPosts:[],
    },
    reducers:{
        setAllPosts:(state,action)=>{
            state.allPost=action.payload;
        },
        setMyPosts:(state,action)=>{
            state.myPost=action.payload;
        },
    }

});
export const {setAllPosts,setMyPosts}=postSlice.actions;
export default postSlice.reducer;