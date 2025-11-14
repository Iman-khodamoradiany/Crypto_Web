import HexagonsAsBgOfSecurityCardInfo from "../../Moloculs/HexagonsAsBgOfSecurityCardInfo/HexagonsAsBgOfSecurityCardInfo"
import MakePoint from "../../Moloculs/MakePoint/MakePoint"

function PointProductDetail() {
    const List1 = ['2 Stories', 'Central Heating', 'Fire Place', 'Lawn']
    const List2 = ['Bike Path', 'Dual Sinks', 'Home Theater', 'Marble Floors']
    const List3 = ['Central Cooling', 'Electric Range', 'Laundry Room', 'Swimming Pool']
    return (
        <div className="w-1/2 flex justify-between items-center h-[150px] my-5">
            <MakePoint item={List1} />
            <MakePoint item={List2} />
            <MakePoint item={List3} />
            <div className="absolute -left-2 top-[48%] scale-150">
                <HexagonsAsBgOfSecurityCardInfo />
            </div>
        </div>
    )
}

export default PointProductDetail