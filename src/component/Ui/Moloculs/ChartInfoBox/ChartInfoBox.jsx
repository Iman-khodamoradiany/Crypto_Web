import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"

function ChartInfoBox(){
    return(
        
            <div className="flex flex-col gap-6 py-8">
                <div className=" relative min-h-20">
                    <div className="absolute ">
                        <Icons Name={"smallLightGreenHexagon"} />
                    </div>
                    <div className="absolute left-2 z-10">
                        <Icons Name={"sphere"} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <P className="text-5xl font-semibold max-w-lg leading-tight">
                        Fusce placerat enim et odio molestie sagittis 
                    </P>
                    <P className='max-w-lg text-gray-500 text-lg '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </P>
                </div>
            </div>
        
       
    )
}

export default ChartInfoBox