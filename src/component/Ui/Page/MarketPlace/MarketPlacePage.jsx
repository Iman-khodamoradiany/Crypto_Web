import MarketPlaceHeader from "../../Moloculs/MarketPlaceHeader/MarketPlaceHeader"
import MarketPlacePropertiesList from "../../Organims/MarketPlacePropertiesList/MarketPlacePropertiesList"

function MarketPlacePage(){
    return(
        <div className="flex flex-col gap-24">
            <MarketPlaceHeader />
            <MarketPlacePropertiesList />
        </div>
    )
}

export default MarketPlacePage