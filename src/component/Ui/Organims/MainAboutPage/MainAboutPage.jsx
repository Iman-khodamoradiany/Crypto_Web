import Icons from "../../Atoms/Icons/Icons"
import LeftMainAboutPage from "../../Moloculs/LeftMainAboutPage/LeftMainAboutPage"
import RightAboutMain from "../RightAboutMain/RightAboutMan"

function MainAboutPage() {
    return (
        <div className="w-[90%] h-[580px] relative mx-auto flex justify-center items-center mt-10 mb-20">
            <LeftMainAboutPage />
            <RightAboutMain />
            <div className="absolute -bottom-28 -left-[12%]">
                <Icons Name={'MediumGrayHexagon'} />
            </div>
            <div className="absolute -bottom-[15%] -left-[4%] scale-125">
                <Icons Name={"orangeHexagonSecurityCartInfo"} />
            </div>
            <div className="absolute -bottom-[38%] -left-[1%]">
                <Icons Name={'MediumGrayHexagon'} />
            </div>
            <div className="absolute -bottom-[52%] -left-[14%]">
                <Icons Name={'MediumGrayHexagon'} />
            </div>
        </div>
    )
}

export default MainAboutPage 