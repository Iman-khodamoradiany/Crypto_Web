import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"

function ChartInfoBox(){
    return(
            <div className="flex flex-col gap-7">
                <div className=" relative min-h-[5.3vw] w-full">
                    <div className="absolute ">
                        <Icons Name={"smallLightGreenHexagon"} />
                    </div>
                    <div className="absolute left-2 z-10">
                        <Icons Name={"sphere"} />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <P className="text-[3.2vw] font-semibold max-w-xl leading-snug dark:text-[white]">
                        Fusce placerat enim et odio molestie sagittis 
                    </P>
                    <P className='max-w-lg text-gray-500 leading-loose text-[1.2vw] dark:text-[#FFFFFFDE]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </P>
                </div>
            </div>
        
       
    )
}

export default ChartInfoBox