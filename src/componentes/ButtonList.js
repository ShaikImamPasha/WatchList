import { Button } from "./index"

const ButtonList=()=>{
    const ButtonListData=["all","Gaming","sportes","news","Games"]
    return(
        <div>
            {
                ButtonListData.map((data)=>{
                    return  <Button data={data}></Button>
                })
            }
        </div>
    )
}
export {ButtonList}