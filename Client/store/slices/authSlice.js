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
        },
        logout: (state)=>{
            state.accessToken=null;
            state.refreshToken=null;
            state.role=null;
            state.isAuthenticated=null;
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("role");
            localStorage.removeItem("author");

        }

    }
})
export const {login,logout} = authSlice.actions;
export default authSlice.reducer;
 