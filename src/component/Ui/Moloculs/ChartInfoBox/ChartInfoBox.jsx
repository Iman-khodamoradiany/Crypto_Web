import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"

function ChartInfoBox(){
    return(
            <div className="flex flex-col gap-7">
                <div className=" relative min-h-[5.3vw]">
                    <div className="absolute ">
                        <Icons Name={"smallLightGreenHexagon"} />
                    </div>
                    <div className="absolute left-2 z-10">
                        <Icons Name={"sphere"} />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <P className="text-[clamp(1.8rem,3.6vw,4rem)] font-semibold max-w-xl leading-snug dark:text-[white]">
                        Fusce placerat enim et odio molestie sagittis 
                    </P>
                    <P className='max-w-lg text-gray-500 leading-loose text-[clamp(1.rem,1.8vw,2.2rem)] '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </P>
                </div>
            </div>
        
       
    )
}

export default ChartInfoBox