import { LiveChart } from ".";

const WatchList=()=>{
    const commomtData=[
        {
            name:"pasha",
            time:"1:2",
            replayes:[
               {
                name:"a1",
                time:"3:39"
               },
               {
                name:"a1",
                time:"3:39"
               },
            ]
        },
        {
            name:"pasha",
            time:"1:2",
            replayes:[
               {
                name:"a1",
                time:"3:39"
               },
               {
                name:"a1",
                time:"3:39",
                replayes:[
                    {
                     name:"a1",
                     time:"3:39"
                    },
                    {
                     name:"a1",
                     time:"3:39"
                    },
                 ]
               }
            ]
        }
    ]
    function CommontCPM({data}){
        return <div>
              {data && data.map((cmtdata)=>(
                <>
                 <div>
                <div>
                    <div className="flex mt-2">
                        <img className="w-7 h-8" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"/>
                      <p>{cmtdata.name}</p>
                       <p>{cmtdata.time}</p>
                    </div>
                    <div className="ml-10">
                         <CommontCPM data={cmtdata?.replayes}></CommontCPM>
                    </div>
                </div>
                 </div>
                </>
              ))}
        </div>
    }
    return <div>
         <div>
                    <LiveChart />
                </div>
        <CommontCPM data={commomtData}></CommontCPM>
    </div>
}
export {WatchList}