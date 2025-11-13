import ChartComponent from "../../Moloculs/ChartComponent/ChartComponent"
import ChartInfoBox from "../../Moloculs/ChartInfoBox/ChartInfoBox"


function ChartSection(){
    return(
        <div className="grid grid-cols-2 gap-6 pt-4 w-11/12">
            <div className="py-8 flex flex-col items-end ">
                <div className="pe-6 w-10/12 ">
                    <ChartComponent />
                </div>
            </div>
            <ChartInfoBox />
        </div>
    )
}

export default ChartSection

