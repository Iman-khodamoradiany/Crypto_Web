import ButtonFilterHeader from "../../Moloculs/ButtonFilterHeader/ButtonFilterHeader"
import CardFilterHeader from "../CardFilterHeader/CardFilterHeader"

function SeactionFilterHeader() {
    return (
        <div className="w-full">
            <div className="flex justify-center items-start relative mt-8 flex-col w-full">
                <ButtonFilterHeader />
                <CardFilterHeader />
            </div>
        </div>
    )
}

export default SeactionFilterHeader