import { useDispatch, useSelector } from "react-redux";
import { toggileMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {SugestionApi} from "../utils/contants";
import { addCatchData } from "../utils/catche";
import { addChartData } from "../utils/chart";
const Header=()=>{
    const dispatch=useDispatch();
    const catchData=useSelector((state)=>state.catch.catchData)
    const callCharDataBg=useSelector((state)=>state.chartSlice.callCharDataBg)
    const [showSuggection,setShowSuggection]=useState(false)
  const [searchValue,setSearchValue]=useState("");
  const [suggestionData,setSuggestionData]=useState("");
  useEffect(()=>{
         if(searchValue===""){
            setSuggestionData(JSON.parse(localStorage.getItem("seachLocalItem")))
         }else{
          var setTime=setTimeout(()=>{
            featchSugestionData();
        },200)
         }
         if(callCharDataBg===true){
        var chartInterval=setInterval(() => {
          console.log("hii");
            dispatch(addChartData({name:"raj",message:"new react"}))
         }, 2000);
       }
       return(()=>{
        clearTimeout(setTime)
        clearInterval(chartInterval)
 })
  },[searchValue,callCharDataBg])
    const handilClick=()=>{
         dispatch(toggileMenu())
    }
    const featchSugestionData=async()=>{
      var c=0;
    for (let key in catchData) {
      if (key===searchValue) {
        setSuggestionData(catchData[key])
        c=1;
        break;
      } 
    }
    if(c===0){
           var data=await fetch(SugestionApi+searchValue);
          data=await data.json();
          dispatch(addCatchData({...catchData,[searchValue]:data[1]}))
          setSuggestionData(data[1])
    }
}
    
function setLocalStorageCatche(data){
  var a=JSON.parse(localStorage.getItem("seachLocalItem")) 
  a===null?localStorage.setItem("seachLocalItem",JSON.stringify([data])):a.length===8?(a.pop(),a.unshift(data)):a.unshift(data);
  localStorage.setItem("seachLocalItem",JSON.stringify(a))
}
    return(
        <div>
           <div className="flex justify-between items-center">
               <div className="m-0 p-0">
                <img className="w-10 h-12 inline-block" onClick={()=>handilClick()} alt="menu_loading" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAACOjo7CwsItLS3c3Nw/Pz/6+vrGxsaSkpKZmZmIiIjy8vK+vr7w8PA4ODgfHx+3t7fi4uKY3kT7AAAAzklEQVR4nO3byQ3CQAxA0TGQDQhZ+i+WHCiAi2UU3uvga6Q52HJrAAAAAAAAAAAAAAAAAAAAAAA/4N7fKvX37MBHVHskF1b3HXIDn9V5h2du4lrdF2tuYOuqA6NLLmzDeK00DtmBAAAAAAB8dNOl0pQ+8p6rh/oxJxdW90X2du1VnXd45SZW50X2G7atui+25MLz/6UAAAAAAHyc/t5irx7qx55cuFQHxpIb+Ae3a9V5kb5dO/8N6fnvgAEAAAAAAAAAAAAAAAAAAAAAvvEGU4ASPASDdpgAAAAASUVORK5CYII="></img>
               <img className="w-20 h-12 inline-block " alt="app_icon" src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"/>
               </div>
               <div className="mr-3">
                     <input type="text" onFocus={()=>setShowSuggection(true)} placeholder="search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className="rounded-s-lg bordr border-solid border-l-stone-700"></input>
                     <button><img className="w-7 h-5 ml-1 pt-1" alt="butoon_loading" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_A5kviVtwDzQM5Lz8fkL5SzBp3OJMxqFt1AnoZicXLJLomif5eXDTjaUXEzCZ1DWnxo&usqp=CAU"/> </button>
                      <div className="bg-white absolute">
                       {
                      showSuggection &&  suggestionData && suggestionData.map((data)=>(
                            <>
                            <p className="" onClick={()=>{setSearchValue(data);
                                  setLocalStorageCatche(data);setShowSuggection(false)
                              }}>
                            {searchValue===""?<img className="w-6 h-5 inline-block" src="https://cdn.iconscout.com/icon/free/png-256/free-recent-1-119532.png?f=webp&w=128"></img>:
                            <img className="w-9 h-10 inline-block" src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Search-icon-by-Kanggraphic-1-580x386.jpg"></img>}{data}</p>
                            </>
                        ))
                       }
                      </div>
               </div>
               <div>
                   <img className="w-10 h-15 rounded-md" src="https://cdn-icons-png.flaticon.com/512/5087/5087592.png"></img>
               </div>
           </div>
        </div>
    )
}
export {Header};