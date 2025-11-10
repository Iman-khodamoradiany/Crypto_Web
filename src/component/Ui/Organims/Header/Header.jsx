import Img from "../../Atoms/Img/Img"
import P from "../../Atoms/P/P"

function Header() {
    return (
        <div className="h-[87vh] relative">
            <Img className={'w-full h-full absolute'} src="./image/BGheader.jpg" alt="" />
            <div className="absolute w-1/3 gap-5 h-3/4 right-[60%] flex justify-center items-start flex-col">
                <div className="w-full flex justify-end items-center">
                    <P className={'text-[3.5vw] font-bold'}>Easy way to find a
                        perfect property</P>
                </div>
                <div>
                    <P className={"text-[1.4vw] font-[NormalFont]"}>We provide a complete service for the sale,
                        purchase or rental of real estate.</P>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Header