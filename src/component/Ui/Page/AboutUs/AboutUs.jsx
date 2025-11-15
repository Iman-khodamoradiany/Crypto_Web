import MainAboutPage from "../../Organims/MainAboutPage/MainAboutPage"
import UserTestimonialsCarousel from "../../Organims/UserTestimonialsCarousel/UserTestimonialsCarousel"
import  PromoBanner from "../../Organims/PromoBanner/PromoBanner"
import AboutUsPerformanceMetrics from "../../Organims/AboutUsPerformanceMetrics/AboutUsPerformanceMetrics"
import AboutUsHeader from "../../Moloculs/AboutUsHeader/AboutUsHeader"
function AboutUs(){
    return(
        <div>
            <AboutUsHeader />
            <AboutUsPerformanceMetrics />
            <MainAboutPage />
            <UserTestimonialsCarousel />
            <PromoBanner />
        </div>
    )
}

export default AboutUs