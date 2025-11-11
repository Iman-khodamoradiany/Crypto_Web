import Icons from "../../Atoms/Icons/Icons";
import Img from "../../Atoms/Img/Img";
import P from "../../Atoms/P/P";

function LeftMainAboutPage() {
    return (
        <div className="w-1/2 flex justify-between items-start flex-col h-full bg-green-400">
            <div>
                <Icons Name={'Lock'} />
            </div>
            <div>
                <P>Pellentesque ac tortor</P>
            </div>
            <div>
                <P>Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est.</P>
            </div>
            <div className="w-full h-2/3">
                <Img className={"w-full h-full"} src={"./image/Video1.png"} />
            </div>
        </div>
    )
}

export default LeftMainAboutPage