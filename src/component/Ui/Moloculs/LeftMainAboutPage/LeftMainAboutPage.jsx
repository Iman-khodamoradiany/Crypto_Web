import Icons from "../../Atoms/Icons/Icons";
import Img from "../../Atoms/Img/Img";
import P from "../../Atoms/P/P";

function LeftMainAboutPage() {
    return (
        <div className="w-1/2 flex justify-between items-start flex-col h-full">
            <div className="w-full h-[40%] flex justify-between items-start flex-col gap-5 pl-8">
                <div>
                    <Icons Name={'Lock'} />
                </div>
                <div>
                    <P className={"text-[3.2vw] font-bold"}>Pellentesque ac tortor</P>
                </div>
                <div>
                    <P className={"text-[1.4vw] text-[#585981DE] w-[90%]"}>Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est.</P>
                </div>
            </div>
            <div className="w-full h-[65%] relative">
                <Img className={"w-full h-full absolute -bottom-10 -left-8"} src={"./image/Video1.png"} />
            </div>
        </div>
    )
}

export default LeftMainAboutPage