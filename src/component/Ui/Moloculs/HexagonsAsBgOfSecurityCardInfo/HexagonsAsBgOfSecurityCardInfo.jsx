import Icons from "../../Atoms/Icons/Icons"

function HexagonsAsBgOfSecurityCardInfo(){
    return(
        <div className="flex relative ">
            <div className="absolute top-20">
                <Icons Name={'Hexagon1SecurityCartInfo'} />
            </div>
            <div className="absolute top-36 left-7">
                <Icons Name={'orangeHexagonSecurityCartInfo'} />
            </div>
            <div className="absolute top-44 left-14">
                <Icons Name={'Hexagon2SecurityCartInfo'} />
            </div>
            <div className="absolute top-56">
                <Icons Name={'Hexagon3SecurityCartInfo'} />
            </div> 
        </div>
    )
}

export default HexagonsAsBgOfSecurityCardInfo