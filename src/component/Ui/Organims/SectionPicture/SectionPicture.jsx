import { useState } from "react"
import Button from "../../Atoms/Button/Button"
import Img from "../../Atoms/Img/Img"
import PictureProduct from "../../Moloculs/PictursProduct/PictursProduct"
import HexagonsAsBgOfChartComponent from "../../Moloculs/HexagonsAsBgOfChartComponent/HexagonsAsBgOfChartComponent"

function SectionPicture() {

    const [imgSelect, setImgselect] = useState('')


    return (
        <div className="w-full h-[650px]">
            <div className="w-2/3 h-full flex justify-centere items-start flex-col gap-2">
                <div className="w-full h-[75%]">
                    <Img className={"w-full h-full"} src={imgSelect ? imgSelect : '/image/Photo1.png'} />
                </div>
                <PictureProduct setImgselect={setImgselect} />
            </div>
            <div className="w-full h-full absolute top-[25%] right-0">
                <HexagonsAsBgOfChartComponent />
            </div>
        </div>
    )
}

export default SectionPicture