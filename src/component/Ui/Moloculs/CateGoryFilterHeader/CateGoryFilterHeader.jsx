import Button from "../../Atoms/Button/Button";
import Icons from "../../Atoms/Icons/Icons";
import P from "../../Atoms/P/P";

function CateGoryFilterHeader() {
    return (
        <div className="w-1/4 bg-white h-full rounded-md flex justify-between items-center pl-4 pr-1.5 py-1.5">
            <div className="flex justify-center items-center scale-110">
                <Icons Name={"Settign"} />
            </div>
            <Button className={"w-3/4 h-full bg-[#1DAEFF] flex justify-center gap-3 items-center px-3 rounded-md"}>
                <div className="scale-100">
                    <Icons Name={"Search"} />
                </div>
                <P className={"text-white"}>Search</P>
            </Button>
        </div>
    )
}

export default CateGoryFilterHeader