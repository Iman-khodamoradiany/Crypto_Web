import P from "../../Atoms/P/P"
import Img from "../../Atoms/Img/Img"
import Icons from "../../Atoms/Icons/Icons"
import HexagonsAsBgOfChartComponent from "../../Moloculs/HexagonsAsBgOfChartComponent/HexagonsAsBgOfChartComponent"


function AboutUsPerformanceMetrics() {
    return (
        <div className="grid grid-cols-2 gap-8 pb-[3.5vw] w-10/12 mx-auto">
            <div>
                <div className="flex flex-col items-center gap-4 w-[10vw] bg-white py-[1vw] z-40 relative top-28 left-72 shadow-xl shadow-gray-200">
                    <P className="text-[clamp(1.8rem,3vw,3.6rem)] font-semibold">4.8</P>
                    <div>
                        <Img src="/image/rating-AboutUs.png" />
                    </div>
                    <P className="text-[clamp(0.7rem,1vw,1.3rem)] text-[#A6A6A6]">Trusted on</P>
                    <P className="text-[clamp(0.7rem,1vw,1.3rem)]">500+ Reviews</P>
                </div>
                <div className="relative z-20">
                    <Img src="/image/AboutUsPerformanceMetricsImage.png" />
                </div>
                <div className="w-11/12 grid grid-cols-2 gap-4 bg-white relative z-40 left-16 -top-10 py-[0.8vw] px-[2.4vw]">
                    <div className="flex gap-4 items-center">
                        <P className="text-[clamp(1.8rem,2.6vw,3rem)] font-semibold">300+</P>
                        <P className="text-[clamp(0.7rem,1vw,1.3rem)] text-[#A6A6A6] max-w-[2vw]">Property Sale</P>
                    </div>
                    <div className="flex gap-4 items-center">
                        <P className="text-[clamp(1.8rem,2.6vw,3rem)] font-semibold">550+</P>
                        <P className="text-[clamp(0.7rem,1vw,1.3rem)] text-[#A6A6A6] max-w-[2vw]">Apartmen Rent</P>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-7 pt-[13vw]">
                <div className=" relative min-h-[5.3vw]">
                    <div className="absolute ">
                        <Icons Name={"smallLightGreenHexagon"} />
                    </div>
                    <div className="absolute left-2 z-10">
                        <Icons Name={"sphere"} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <P className="text-[3vw] font-semibold max-w-xl leading-tight dark:text-[white]">
                        Fusce placerat enim et odio molestie sagittis
                    </P>
                    <P className='max-w-lg text-gray-500 leading-relaxed text-[clamp(1.rem,1.8vw,2.2rem)] '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </P>
                </div>
                <div className="absolute right-0 -bottom-1/4">
                    <HexagonsAsBgOfChartComponent />
                </div>

            </div>
        </div>
    )
}

export default AboutUsPerformanceMetrics