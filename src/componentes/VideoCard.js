const VideoCard=({data})=>{
    const {snippet,statistics}=data;
    const {channelTitle,title,thumbnails}=snippet;
    return(
        <>
       <div className="p-2 m-2 w-40 shadow-lg">
         <img className="rounded-lg" src={thumbnails.default.url}></img>
         <ul>
             <li className="font-bold">
                {title}    
            </li>    
            <li>
                {channelTitle}
            </li>
            <li>
                {statistics.viewCount} views
            </li>
        </ul> 
      </div>
        </>
    )
}
export {VideoCard}