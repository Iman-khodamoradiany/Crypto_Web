import CateGoryFilterHeader from "../../Moloculs/CateGoryFilterHeader/CateGoryFilterHeader";
import InputFilterHeader from "../../Moloculs/InputFilterHeader/InputFilterHeader";

function CardFilterHeader() {
    return (
        <div className="w-full h-[55px] absolute -bottom-10 flex justify-start items-center gap-1">
            <InputFilterHeader />
            <CateGoryFilterHeader />
        </div>
    )
}

export default CardFilterHeader