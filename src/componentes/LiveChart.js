import { useEffect, useState } from "react"
import { Chart } from "./index"
import { useDispatch, useSelector } from "react-redux"
import  { addChartData,claerChartData,addCallCharDataBg } from "../utils/chart"
const LiveChart=()=>{
    const [inmessage,setInMessage]=useState("")
    const dispatch=useDispatch();
    const chartData=useSelector((state)=>state.chartSlice.chartData)
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    function generateString(length) {
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
    useEffect(()=>{
      dispatch(addCallCharDataBg(false))
      addCallCharDataBg(false);
           var chardtIntervel=setInterval(
           ()=>{
            dispatch(addChartData({name:makeid(5),message:generateString(8)}))
           }
           ,2000)
           return ()=>{
             clearInterval(chardtIntervel); dispatch(addCallCharDataBg(true))
           }
    },[])
    return <>
      <div className="w-72 h-60 border-solid border-2 flex flex-col-reverse overflow-y-scroll ">
       {
        chartData.map((data)=>{
          return  <>
           <Chart name={data.name} message={data.message}></Chart>
          </>
        })
       }
      </div>
      <input value={inmessage} onChange={(e)=>setInMessage(e.target.value)} type="texts"></input>
      <button onClick={()=>dispatch(addChartData({name:"pasha",message:inmessage}))}>send</button>
    </>
}
export {LiveChart}