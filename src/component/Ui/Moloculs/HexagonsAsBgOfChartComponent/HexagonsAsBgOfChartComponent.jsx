import Icons from "../../Atoms/Icons/Icons"

function HexagonsAsBgOfChartComponent(){
    return(
        <div className="flex justify-end relative z-10">
            <div className="absolute -top-20 right-28 ">
                <Icons Name={'MediumGrayHexagon'} />
            </div>
            <div className="absolute -top-10 right-16">
                <Icons Name={'smallGreenHexagon'} />
            </div>
            <div className="absolute top-2 right-0">
                <Icons Name={'halfLargeHexagon'} />
            </div>
        </div>
    )
}

export default HexagonsAsBgOfChartComponent