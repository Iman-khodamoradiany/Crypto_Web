import MainAboutPage from "../../Organims/MainAboutPage/MainAboutPage"
import UserTestimonialsCarousel from "../../Organims/UserTestimonialsCarousel/UserTestimonialsCarousel"
import  PromoBanner from "../../Organims/PromoBanner/PromoBanner"
import AboutUsPerformanceMetrics from "../../Organims/AboutUsPerformanceMetrics/AboutUsPerformanceMetrics"
function AboutUs(){
    return(
        <div>
            <AboutUsPerformanceMetrics />
            <MainAboutPage />
            <UserTestimonialsCarousel />
            <PromoBanner />
        </div>
    )
}

export default AboutUs