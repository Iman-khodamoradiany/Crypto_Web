import DescriptionProductDetail from "../../Organims/DescriptionProductDetail/DescriptionProductDetail"
import Facilities from "../../Organims/Facilities/Facilities"
import SectionPicture from "../../Organims/SectionPicture/SectionPicture"

function ProductDetail() {
    return (
        <div className="w-full relative mx-auto py-10">
            <div className="w-[85%] mx-auto">
                <SectionPicture />
                <Facilities />
                <DescriptionProductDetail />
            </div>
        </div>
    )
}

export default ProductDetail