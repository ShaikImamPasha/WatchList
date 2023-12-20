import { useEffect, useState } from "react"
import { MainContainerVideosApi } from "../utils/contants";
import {VideoCard} from "./index";
import { Link } from "react-router-dom";
const VideoConatiner=()=>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        callApi();
   },[])
   const callApi=async ()=>{
       const data=await fetch(MainContainerVideosApi);
       const json=await data.json()
       setVideos(json.items);
   }
   return videos.length===0?<p>loading</p>:<div className="flex flex-wrap justify-center">
         {videos.map(data=><Link to={"/watch?v="+data.id}><VideoCard data={data}></VideoCard></Link>)}
    </div>
}
export {VideoConatiner}