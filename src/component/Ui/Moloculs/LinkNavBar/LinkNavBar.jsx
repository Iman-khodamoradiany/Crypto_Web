import { Link, useLocation } from "react-router";
import Button from "../../Atoms/Button/Button";
import { NavBarList } from "../../../../Core/constans/Array";

function LinkNavBar() {
    const Pathnam = useLocation()
    console.log(Pathnam)
    return (
        <div>
            <ul className="flex justify-center items-center gap-14">
                {NavBarList.map((item) => (
                    <li key={item.key}>
                        <Link className={`text-[1vw] duration-500 ${Pathnam.pathname == item.Link ? "NavBarAnimationAvtive text-[#1DAEFF]" : "NavBarAnimation"} hover:text-[#1DAEFF] relative`} 
                        to={item.Link}>{item.title}</Link>
                    </li>
                ))}
                <li>
                    <Link to={"/LoginPage"}>
                        <Button
                            className={` ${Pathnam.pathname == '/LoginPage' ? 'text-white bg-[#1DAEFF] hover:text-[#1DAEFF] hover:bg-white' : 'text-[#1DAEFF] bg-white hover:text-white hover:bg-[#1DAEFF]'} border-2 px-9 py-2 rounded-xl border-[#1DAEFF] text-[1vw] transition-all duration-300 `}>
                            LOG IN
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default LinkNavBar