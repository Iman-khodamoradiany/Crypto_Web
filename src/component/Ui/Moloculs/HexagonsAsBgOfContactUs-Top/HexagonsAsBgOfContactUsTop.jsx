import Icons from "../../Atoms/Icons/Icons"

function HexagonsAsBgOfContactUsTop(){
    return(
        <div className="relative z-10 ">
            <div className="absolute -top-24">
                <Icons Name={'grayHexagon1-contactUs'} />
            </div>
            <div className="absolute -top-8 left-8">
                <Icons Name={'orangeHexagon2-contactUs'} />
            </div>
            <div className="absolute top-3 left-20">
                <Icons Name={'grayHexagon3-contactUs'} />
            </div>
            <div className="absolute top-24 left-1">
                <Icons Name={'grayHexagon4-contactUs'} />
            </div>
            </div>
    )
}

export default HexagonsAsBgOfContactUsTop