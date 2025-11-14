import P from "../../Atoms/P/P";
import Location from "../../Moloculs/Location/Location";

function MapLocation(){
    return(
        <div className="w-2/3 flex justify-center items-start flex-col h-[300px] my-5">
            <div>
                <P>Property on Map</P>
            </div>
            <div className="w-full h-full">
                <Location />
            </div>
        </div>
    )
}

export default MapLocation