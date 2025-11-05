import Icons from "../../Atoms/Icons/Icons"
import ChartInfoBox from "../../Moloculs/ChartInfoBox/ChartInfoBox"
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
           <div className="grid grid-cols-2 gap-2 py-8">
               
               <div></div>
               <ChartInfoBox />
           </div>
        </div>
    )
}

export default FinancialOverViewSection