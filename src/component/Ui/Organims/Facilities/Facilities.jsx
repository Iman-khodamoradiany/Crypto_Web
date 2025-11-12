import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"

function Facilities() {
    const FacilitiesList =[
        {id: 1 , icon: 'Bed' , number: 4},
        {id: 1 , icon: 'Bathroom' , number: 2},
        {id: 1 , icon: 'Room' , number: 2},
        {id: 1 , icon: 'Parking' , number: 1},
        {id: 1 , icon: 'Year' , number: 2007},
        {id: 1 , icon: 'Area' , number: 4300},
    ]
    return (
        <div className="w-full mx-auto my-10 h-[60px]">
            <div className="w-2/3 h-full flex justify-start border items-center rounded-lg">
                {FacilitiesList.map((item) => (
                    <div className="w-1/6 flex justify-center items-center gap-2 border-l h-full">
                        <Icons Name={item.icon} />
                        <P className={'text-[1vw] text-[#585981]'}>{item.number}</P>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Facilities