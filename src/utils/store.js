import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import catche from "./catche";
import chart from "./chart";
const store=configureStore({
    reducer:{
        app:appSlice,
        catch: catche,
        chartSlice:chart 
    }
})
export default store;