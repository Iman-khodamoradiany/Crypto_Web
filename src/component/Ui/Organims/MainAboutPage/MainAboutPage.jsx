import LeftMainAboutPage from "../../Moloculs/LeftMainAboutPage/LeftMainAboutPage"
import RightAboutMain from "../RightAboutMain/RightAboutMan"

function MainAboutPage() {
    return (
        <div className="w-[90%] h-[580px]  mx-auto flex justify-center items-center my-10">
            <LeftMainAboutPage />
            <RightAboutMain />
        </div>
    )
}

export default MainAboutPage 