import CompanyList from "../../Moloculs/CompanyList/CompanyList"
import FooterInfo from "../../Moloculs/FooterInfo/FooterInfo"
import FooterTour from "../../Moloculs/FooterTour/FooterTour"

function Footer(){
    return(
        <div className="w-[90%] mx-auto pt-20 pb-10 flex justify-between items-center h-[400px]">
            <FooterInfo />
            <FooterTour />
            <CompanyList />
            <div className="w-1/4"></div>
        </div>
    )
}

export default Footer