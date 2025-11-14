import { useContext } from "react"
import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"
import { MyContext } from "../../../Partial/Layout"

function Facilities() {
    const { isdarkMode } = useContext(MyContext)
    const FacilitiesList = [
        { id: 1, icon: 'Bed', Dicon: 'LBed', number: 4 },
        { id: 1, icon: 'Bathroom', Dicon: 'LBathroom', number: 2 },
        { id: 1, icon: 'Room', Dicon: 'LRoom', number: 2 },
        { id: 1, icon: 'Parking', Dicon: 'LParking', number: 1 },
        { id: 1, icon: 'Year', Dicon: 'LYear', number: 2007 },
        { id: 1, icon: 'Area', Dicon: 'LArea', number: 4300 },
    ]
    return (
        <div className="w-full mx-auto my-10 h-[60px]">
            <div className="w-2/3 h-full flex justify-start border items-center rounded-lg">
                {FacilitiesList.map((item) => (
                    <div className="w-1/6 flex justify-center items-center gap-2 border-l h-full">
                        <Icons Name={isdarkMode ? item.Dicon : item.icon} />
                        <P className={'text-[1vw] text-[#585981] dark:text-white'}>{item.number}</P>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Facilities