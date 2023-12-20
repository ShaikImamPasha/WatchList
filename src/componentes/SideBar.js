import { useSelector } from "react-redux"

const SideBar=()=>{
  const isMenuOpen=useSelector((state)=>state.app.isMenuOpen)
      return(
          isMenuOpen &&   <div className="w-[100px] fixed top-8 bg-white">
          <div className="flex items-center flex-col ">
            <div className="flex-col items-center justify-between gep-10 mt-3 ">  
                  <div className="flex justify-between items-center">
                  <img  className="w-5 h-5 inline-block ml-1" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img>
                    <p className="inline-block">Home</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <img  className="w-8 h-5 inline-block mr-1" src="https://logowik.com/content/uploads/images/youtube-shorts5863.jpg"></img>
                    <p className="inline-block">Shorts</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <img  className="w-10 h-5 inline-block mr-1" src="https://static.vecteezy.com/system/resources/thumbnails/022/603/364/small/icon-subsribe-pro-png.png"></img>
                    <p className="inline-block">Subscription</p>
                  </div>
            </div>
            <hr className="border-2 border-black-500 w-20 mb-3 mt-3"></hr>
            <div className="flex-col items-center justify-between gep-10">  
                  <div className="flex justify-between items-center">
                  <img  className="w-5 h-5 inline-block ml-1" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img>
                    <p className="inline-block">You</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <img  className="w-7 h-6 inline-block mr-1" src="https://w7.pngwing.com/pngs/688/509/png-transparent-computer-icons-history-symbol-previous-button-miscellaneous-angle-text.png"></img>
                    <p className="inline-block">Histry</p>
                  </div>

            </div>
            <hr className="border-2 border-black-500 w-20 mb-3 mt-3"></hr>
            <div>

            </div>
          </div>
      </div>
         
      )
}
export {SideBar}