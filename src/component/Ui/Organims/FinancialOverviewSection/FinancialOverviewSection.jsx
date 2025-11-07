import Icons from "../../Atoms/Icons/Icons"
import ChartComponent from "../../Moloculs/ChartComponent/ChartComponent"
import ChartInfoBox from "../../Moloculs/ChartInfoBox/ChartInfoBox"
import SecurityCardInfo from "../../Moloculs/SecurityCardInfo/SecurityCardInfo"
import HexagonsAsBgOfSecurityCardInfo from "../../Moloculs/HexagonsAsBgOfSecurityCardInfo/HexagonsAsBgOfSecurityCardInfo"

function FinancialOverViewSection(){
    return(
        <div className="flex flex-col gap-10">
           <div className="flex justify-end relative">
               <div className="absolute -top-20 right-28 ">
                    <Icons Name={'MediumGrayHexagon'} />
               </div>
               <div className="absolute -top-10 right-16">
                   <Icons Name={'smallGreenHexagon'} />
               </div>
               <div className="absolute top-2 right-0">
                    <Icons Name={'halfLargeHexagon'} />
               </div>
           </div>
           <div className="grid grid-cols-2 gap-6 py-4 w-11/12">
                <div className="py-8 flex flex-col items-end ">
                   <div className="pt-10 pe-6 w-10/12 ">
                       <div className="flex justify-end pe-4">
                           <img src="/Tooltip.png" alt="" className="-my-5 me-4 z-10"/>
                       </div>
                       <ChartComponent />
                   </div>
               </div>
               <ChartInfoBox />
           </div>
           <div className=" relative h-64">
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