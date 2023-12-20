import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name: "app",
    initialState:{
      isMenuOpen:false 
    },
    reducers:{
        toggileMenu:(state)=>{
            return {...state,isMenuOpen:!state.isMenuOpen}
        }
    }
})
export  const {toggileMenu}=appSlice.actions;
export default appSlice.reducer;