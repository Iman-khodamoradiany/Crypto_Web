import P from "../../Atoms/P/P";
import Location from "../../Moloculs/Location/Location";

function MapLocation(){
    return(
        <div className="w-2/3 flex justify-center items-start flex-col h-[350px] my-20 gap-4">
            <div>
                <P className={"text-[#1DAEFF] text-[1.3vw] font-bold"}>Property on Map</P>
            </div>
            <div className="w-full h-full">
                <Location />
            </div>
        </div>
    )
}

export default MapLocation