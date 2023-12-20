import { createSlice } from "@reduxjs/toolkit";

const catche=createSlice({
    name: "catche",
    initialState:{
      catchData:{} 
    },
    reducers:{
        addCatchData:(state,action)=>{
          //  console.log("data",action.payload);
            return {...state,catchData:action.payload}
        }
    }
})
export  const {
    addCatchData
}=catche.actions;
export default catche.reducer;