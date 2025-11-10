import Input from "../../Atoms/Input/Input";
import DropDownCountry from "../DropDownCountry/DropDownCountry";

function InputFilterHeader() {
    return (
        <div className=" flex w-3/4 bg-white h-full shadow-lg rounded-md px-5">
            <Input className={"placeholder:text-[1vw] outline-none text-[#6A6A6A] w-1/2"} placeholder="Enter keyword here ..." />
            <DropDownCountry />
        </div>
    )
}

export default InputFilterHeader