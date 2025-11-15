import {marketPlaceList} from "../../../../Core/constans/MarketPlaceArray"
import P from "../../Atoms/P/P"
import Img from "../../Atoms/Img/Img"
import HexagonsAsBgOfSecurityCardInfo from "../../Moloculs/HexagonsAsBgOfSecurityCardInfo/HexagonsAsBgOfSecurityCardInfo"
import HexagonsAsBgOfChartComponent from "../../Moloculs/HexagonsAsBgOfChartComponent/HexagonsAsBgOfChartComponent"
function MarketPlacePropertiesList(){
    return(
        <div>
            <div className="relative z-40 top-72 -right-4">
                <HexagonsAsBgOfChartComponent />
            </div>
            <div className="w-10/12 grid grid-cols-3 gap-8 mx-auto relative z-40 ">
            {
                marketPlaceList.map((item,index)=>(
                    <div key={index} className=" flex flex-col gap-6 items-center bg-white border-2 border-[#DCDCEB] rounded-3xl p-[1.5vw] hover:border-[#1DAEFF] hover:shadow-lg hover:shadow-gray-300 scale-100 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div>
                            <Img src={item.image} />
                        </div>
                        <div className="flex flex-col gap-5 items-start justify-between w-full p-[0.5vw]">
                            <P className="text-[clamp(0.7rem,1.6vw,1.8rem)] font-semibold max-w-[19.3vw]">{item.address}</P>
                            <div className=" w-full flex  justify-between text-[#8F90A6] text-[clamp(0.7rem,1.2vw,1.8rem)]  ">
                                <div className="flex gap-2"> 
                                    <P>{item.numberOfBedrooms}</P>
                                    <P>Bedroom</P>
                                </div>
                                <div className="flex gap-2">
                                    <P>{item.meterage}</P>
                                    <P>M</P>
                                </div>
                                <div className="flex gap-2">
                                    <P>{item.numberOfGarages}</P>
                                    <P>Garage</P>
                                </div>
                            </div>
                            <div className="w-full pt-2 flex justify-between ">
                                <div className="flex gap-2 items-center text-[#8F90A6] text-[clamp(0.7rem,1vw,1.8rem)] ">
                                    <P>Posted by</P>
                                    <P>{item.postedBy}</P>
                                </div>
                                <P className="p-2 px-4 bg-[#8b8989] text-white text-[clamp(0.7rem,1.2vw,1.8rem)] font-semibold rounded-lg">{item.price}</P>
                            </div>
                        </div> 
                    </div>
                ))
            }
            </div>
            <div className="relative -top-56 z-10">
                <HexagonsAsBgOfSecurityCardInfo />
            </div>
        </div>
        
    )
}

export default MarketPlacePropertiesList