import { Link } from "react-router";
import Img from "../../Atoms/Img/Img";
import { useEffect, useState } from "react";
import Icons from "../../Atoms/Icons/Icons";

function Logo() {
    const [isdarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (isdarkMode) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [isdarkMode])

    return (
        <div className="flex justify-center items-center gap-3">
            <Link to={'/'}>
                <Img src={'/image/Logo.png'} />
            </Link>
            <button
                className={`w-[100px] flex justify-center relative items-center h-[40px] border-2 rounded-full ${isdarkMode ? 'border-[#1DAEFF] bg-[#313030]' : null}`}
                onClick={() => setIsDarkMode(!isdarkMode)}>
                <div className={`w-[30px] h-[30px] flex justify-center items-center duration-500 transition-all border border-black rounded-full absolute ${isdarkMode ? '-translate-x-[100%] bg-white' : 'translate-x-[100%] bg-[#313030]'}`}>
                    <Icons Name={isdarkMode ? 'Moon' : 'Sun'} />
                </div>
            </button>

        </div>
    )
}

export default Logo