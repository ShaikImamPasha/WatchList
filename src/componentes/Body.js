import { Outlet } from "react-router-dom";
import { SideBar,MainContainer } from "./index";
const Body=()=>{
    return(
        <div className="bg-white grid grid-flow-col">
            <div className="">
               <SideBar></SideBar>
            </div>
            <div>
               <Outlet />
            </div>
        </div>
    )
}
export {Body}