import { createSlice } from "@reduxjs/toolkit";

const authSlice= createSlice({
    name:"Auth",
    initialState:{
       accessToken: localStorage.getItem("accessToken") || null,
       refreshToken:localStorage.getItem("refreshToken") || null,
       role:localStorage.getItem("role") || null,
       author:localStorage.getItem("author") || null,
       isAuthenticated: !!localStorage.getItem("accessToken"),
    },
    reducers:{
        login:(state,action)=>{
            state.accessToken=action.payload.AcessToken;
            state.refreshToken=action.payload.RefreshToken;
            state.role=action.payload.role;
            state.author=action.payload.author;
            state.isAuthenticated= true;
            localStorage.setItem("accessToken",action.payload.AcessToken);
            localStorage.setItem("refreshToken",action.payload.RefreshToken);
            localStorage.setItem("role",action.payload.role);
            localStorage.setItem("author",action.payload.author)
        }

    }
})
export const {login} = authSlice.actions;
export default authSlice.reducer;
 