import Logo from "../../Moloculs/Logo/Logo";
import LinkNavBar from "../../Moloculs/LinkNavBar/LinkNavBar";

function NavBar() {
    return (
        <div className="w-full h-full p-3 flex justify-center items-center">
            <div className="w-[90%] h-full flex justify-between items-center">
                <Logo />
                <LinkNavBar />
            </div>
        </div>
    )
}

export default NavBar;