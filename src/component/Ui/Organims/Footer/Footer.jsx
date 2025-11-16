import CompanyList from "../../Moloculs/CompanyList/CompanyList"
import FooterInfo from "../../Moloculs/FooterInfo/FooterInfo"
import FooterSubscribe from "../../Moloculs/FooterSubscribe/FooterSubscribe"
import FooterTour from "../../Moloculs/FooterTour/FooterTour"

function Footer(){
    return(
        <div className="w-[90%] mx-auto mt-10 pb-10 flex justify-between items-start h-[350px] dark:text-white">
            <FooterInfo />
            <FooterTour />
            <CompanyList />
            <FooterSubscribe />
        </div>
    )
}

export default Footer