import { createSlice } from "@reduxjs/toolkit";

const navSlice= createSlice({
    name:"nav",
    initialState:{
        Sidebar:false,
        tab:"",
    },
    reducers:{
        togglesidebar:(state)=>{
            state.Sidebar=!state.Sidebar;

        },
        setTab:(state,action)=>{
            state.tab=action.payload;
        },

    }
});
export const{togglesidebar,setTab}=navSlice.actions;
export default navSlice.reducer;