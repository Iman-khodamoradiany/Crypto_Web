import P from "../../Atoms/P/P"
import Img from "../../Atoms/Img/Img"
import Button from "../../Atoms/Button/Button"
import HexagonsAsBgOfChartComponent from "../../Moloculs/HexagonsAsBgOfChartComponent/HexagonsAsBgOfChartComponent"
import HexagonsAsBgOfSecurityCardInfo from "../../Moloculs/HexagonsAsBgOfSecurityCardInfo/HexagonsAsBgOfSecurityCardInfo"

function PromoBanner() {
    return (
        <div className="relative">
            <div className="absolute -top-60">
                <HexagonsAsBgOfSecurityCardInfo />
            </div>
            <div className="flex relative h-[450px] z-30 w-10/12 mx-auto rounded-[50px] overflow-hidden bg-[#cfe7f1]">
                <div className="bg-[#cfe7f1] flex flex-col gap-9 items-start justify-center ps-[4vw] rounded-s-3xl w-1/2">
                    <P className="text-[clamp(1.8rem,2.8vw,3rem)] font-extrabold max-w-[25vw]">Find your best Real Estate</P>
                    <P className="text-[clamp(0.7rem,1.4vw,2rem)] text-[#585981] max-w-[34vw] leading-loose">We provide a complete service for the sale,
                        purchase or rental of real estate.
                    </P>
                    <Button className="py-2 px-11 bg-[#1DAEFF] max-w-[15vw] rounded-xl text-white">Contact Us</Button>
                </div>
                <div className="w-1/2">
                    <Img src="/image/Mask.png" className="rounded-e-3xl w-full scale-90 absolute -bottom-6 -right-10" />
                </div>

            </div>

            <div className="absolute right-0 scale-75">
                <HexagonsAsBgOfChartComponent />
            </div>
        </div>
    )
}

export default PromoBanner