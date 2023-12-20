import { createSlice } from "@reduxjs/toolkit";

const chart=createSlice({
    name: "catche",
    initialState:{
      chartData:[],
      callCharDataBg:false
    },
    reducers:{
        addChartData:(state,action)=>{
            if(state.chartData.length>15){
                state.chartData.splice(15,1)
            }
          state.chartData.unshift(action.payload)
        },
        claerChartData:(state)=>{
            return {...state,chartData:[]}
        },
        addCallCharDataBg:(state,action)=>{
            return {...state,callCharDataBg:action.payload}
        }
    }
})
export  const {
    addChartData,claerChartData,addCallCharDataBg
}=chart.actions;
export default chart.reducer;