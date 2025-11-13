import SecurityCardInfo from "../../Moloculs/SecurityCardInfo/SecurityCardInfo"
import HexagonsAsBgOfSecurityCardInfo from "../../Moloculs/HexagonsAsBgOfSecurityCardInfo/HexagonsAsBgOfSecurityCardInfo"
import HexagonsAsBgOfChartComponent from "../../Moloculs/HexagonsAsBgOfChartComponent/HexagonsAsBgOfChartComponent"
import ChartSection from "../../Moloculs/ChartSection/ChartSection"

function FinancialOverViewSection(){
    return(
        <div className="flex flex-col gap-24 h-[1100px] dark:bg-[black]">
           <div className="flex flex-col gap-24">
                <HexagonsAsBgOfChartComponent />
                <ChartSection />
           </div>
           <div className=" relative h-64 pt-[2.3vw]">
               <div className="absolute">
                   <HexagonsAsBgOfSecurityCardInfo />
               </div>
               <div className="absolute right-0 top-0 z-10 w-11/12">
                    <SecurityCardInfo />
               </div>
           </div>
        </div>
    )
}

export default FinancialOverViewSection