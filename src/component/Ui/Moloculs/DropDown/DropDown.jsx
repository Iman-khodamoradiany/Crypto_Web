import Button from "../../Atoms/Button/Button";
import Icons from "../../Atoms/Icons/Icons";
import P from "../../Atoms/P/P";

function DropDown({setActive , setCategory , category , active}) {
    return (
        <div
            onClick={() => setActive(!active)}
            className="w-full pr-5 h-full flex justify-between items-center cursor-pointer">
            {category ?
                <div className="w-full flex justify-between items-center">
                    <P className={'text-[#6A6A6A] text-[1vw] border-l-[3px] border-[#3A8BEA] pl-3'}>{category}</P>
                    <Button onClick={() => setCategory(null)}>
                        <Icons Name={"Close"} />
                    </Button>
                </div>
                :
                <div className="w-full flex justify-between items-center">
                    <Button className={"text-[#6A6A6A] text-[1vw] border-l-[3px] border-[#3A8BEA] pl-3"}>Select Location</Button>
                    <Icons Name={"ArrowBottom"} />
                </div>
            }
        </div>
    )
}

export default DropDown