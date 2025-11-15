import P from "../../Atoms/P/P"
import Img from "../../Atoms/Img/Img"
import { Link } from "react-router"
import {NewPropertiesList} from "../../../../Core/constans/NewPropertiesArray"
import HexagonsAsBgOfSecurityCardInfo from "../../Moloculs/HexagonsAsBgOfSecurityCardInfo/HexagonsAsBgOfSecurityCardInfo"
import HexagonsAsBgOfChartComponent from "../../Moloculs/HexagonsAsBgOfChartComponent/HexagonsAsBgOfChartComponent"

function NewPropertiesSection(){
    return(
        <div className="py-[8vw]">
            <div className="flex relative z-30">
                <div className="py-[8vw] relative z-10">
                    <HexagonsAsBgOfSecurityCardInfo />
                </div>
                <div className=" flex flex-col items-center gap-6  w-11/12 mx-auto relative z-40">
                    <div className="flex justify-between w-11/12">
                        <P className="text-[clamp(1.2rem,1.8vw,2.3rem)] font-semibold">Recently Added</P>
                        <Link className="text-[#1DAEFF] font-semibold">See all</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6 w-11/12 mx-auto relative z-40">
                       {
                            NewPropertiesList.map((item,index)=>(
                                <div key={index} className="grid grid-cols-3 gap-6 bg-white border-2 border-[#DCDCEB] rounded-3xl p-[1.5vw] hover:border-[#1DAEFF] hover:shadow-lg hover:shadow-gray-300 scale-100 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <div>
                                        <Img src={item.image} />
                                    </div>
                                    <div className="col-span-2 flex flex-col items-start justify-between w-full">
                                        <P className="text-[clamp(0.7rem,1.6vw,1.8rem)] font-semibold max-w-[19.3vw]">{item.address}</P>
                                        <div className=" w-full flex  justify-between text-[#8F90A6] text-[clamp(0.7rem,1.2vw,1.8rem)] font-semibold ">
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
                                        <div className="w-full flex items-center justify-between font-semibold text-[clamp(0.7rem,1.2vw,1.8rem)]">
                                            <div className="flex gap-2 items-center text-[#8F90A6] ">
                                                <P>Posted by</P>
                                                <P>{item.postedBy}</P>
                                            </div>
                                            <P className="py-2 px-4 bg-[#8b8989] text-white rounded-lg">{item.price}</P>
                                        </div>
                                    </div> 
                                </div>
                            ))
                        }
                    </div>
                </div> 
            </div>
            <div className="relative top-14 right-0 z-10">
                <HexagonsAsBgOfChartComponent />
            </div>
       </div>
       
    )
}

export default NewPropertiesSection