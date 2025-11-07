import { Link } from "react-router";
import Button from "../../Atoms/Button/Button";
import { NavBarList } from "../../../../Core/constans/Array";

function LinkNavBar() {
    return (
        <div>
            <ul className="flex justify-center items-center gap-14">
                {NavBarList.map((item) => (
                    <li key={item.key}>
                        <Link className="text-[1vw]" to={item.Link}>{item.title}</Link>
                    </li>
                ))}
                <li>
                    <Button className={"text-[#1DAEFF] border-2 px-9 py-2 rounded-xl border-[#1DAEFF] text-[1vw]"}>LOG IN</Button>
                </li>
            </ul>
        </div>
    )
}
export default LinkNavBar