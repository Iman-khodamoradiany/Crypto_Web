import Icons from "../../Atoms/Icons/Icons"

function HexagonsAsBgOfSecurityCardInfo(){
    return(
        <div className="flex relative">
            <div className="absolute top-32">
                <Icons Name={'Hexagon1SecurityCartInfo'} />
            </div>
            <div className="absolute top-48 left-4">
                <Icons Name={'orangeHexagonSecurityCartInfo'} />
            </div>
            <div className="absolute top-52 left-12">
                <Icons Name={'Hexagon2SecurityCartInfo'} />
            </div>
            <div className="absolute top-64">
                <Icons Name={'Hexagon3SecurityCartInfo'} />
            </div> 
        </div>
    )
}

export default HexagonsAsBgOfSecurityCardInfo