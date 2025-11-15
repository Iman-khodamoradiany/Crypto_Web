import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"

function MakePoint({item}){
    return(
        <div className="h-full">
            <ul className="flex h-full justify-between items-start flex-col">
                {item.map((item) => (
                    <li className="flex justify-center items-center gap-3 text-[#585981DE] dark:text-white">
                        <Icons Name={'Checked'} />
                        <P>{item}</P>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MakePoint