import MainAboutPage from "../../Organims/MainAboutPage/MainAboutPage"
import UserTestimonialsCarousel from "../../Organims/UserTestimonialsCarousel/UserTestimonialsCarousel"

function AboutUs(){
    return(
        <div>
            <div>حجاز</div>
            <MainAboutPage />
            <div>
                <UserTestimonialsCarousel />
            </div>
            <div>حجاز</div>
        </div>
    )
}

export default AboutUs