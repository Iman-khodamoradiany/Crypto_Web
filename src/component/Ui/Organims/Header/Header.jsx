import Img from "../../Atoms/Img/Img"
import P from "../../Atoms/P/P"
import SeactionFilterHeader from "../SectionFilterHeader/SectionFilterHeader"

function Header() {
    return (
        <div className="h-[87vh] relative z-20 ">
            <Img className={'w-full h-full absolute'} src="./image/BGheader.jpg" alt="" />
            <div className="absolute  w-3/6 gap-5 h-5/6 right-[40%] flex justify-center items-start flex-col">
                <div className="w-full flex justify-start items-center">
                    <P className={'text-[3.7vw] dark:text-red-400 w-3/4 font-bold'}>Easy way to find a
                        perfect property</P>
                </div>
                <div>
                    <P className={"text-[1.4vw] w-4/6 font-[NormalFont]"}>We provide a complete service for the sale,
                        purchase or rental of real estate.</P>
                </div>
                <SeactionFilterHeader />
            </div>
        </div>
    )
}

export default Header