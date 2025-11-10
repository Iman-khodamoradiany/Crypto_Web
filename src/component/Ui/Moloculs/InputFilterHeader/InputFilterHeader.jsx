import Button from "../../Atoms/Button/Button";
import Icons from "../../Atoms/Icons/Icons";
import Input from "../../Atoms/Input/Input";

function InputFilterHeader() {
    return (
        <div className=" flex w-3/4 bg-white h-full shadow-lg rounded-md overflow-hidden">
            <Input className={"placeholder:text-[1vw] outline-none px-5 text-[#6A6A6A] w-1/2"} placeholder="Enter keyword here ..." />
            <div className="w-1/2">
                <div className="w-full pr-5 h-full flex justify-between items-center">
                    <Button className={"text-[#6A6A6A] text-[1vw] border-l-[3px] border-[#3A8BEA] pl-3"}>Select Location</Button>
                    <Icons Name={"ArrowBottom"} />
                </div>
            </div>
        </div>
    )
}

export default InputFilterHeader