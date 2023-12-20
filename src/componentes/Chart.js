
const Chart=({name,message})=>{
    return <>
          <div  className="flex">
          <img className="w-7 h-8" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"/>
          <p>{name}</p>
          <p className="ml-2">{message}</p>
          </div>
    </>
}
export {Chart}