import Img from "../../Atoms/Img/Img"
import ChartComponent from "../ChartComponent/ChartComponent"
import ChartInfoBox from "../ChartInfoBox/ChartInfoBox"

function ChartSection(){
    return(
        <div className="grid grid-cols-2 gap-6 pt-4 w-11/12">
            <div className=" flex flex-col items-end">
                <div className=" pe-6 w-10/12 ">
                    <div className="flex justify-end pe-4">
                        <Img src="/Tooltip.png" alt="" className="-my-1 me-[calc(1rem+3vw)] z-10"/>
                    </div>
                    <ChartComponent />
                </div>
            </div>
            <ChartInfoBox />
        </div>
    )
}

export  default ChartSection