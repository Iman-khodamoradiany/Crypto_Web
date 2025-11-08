import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Pagination,Scrollbar,A11y,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import UserTestimonialsCarouselHeader from "../../Moloculs/UserTestimonialsCarouselHeader/UserTestimonialsCarouselHeader"
import {userTestimonialsArray} from "../../../../Core/constans/UserTestimonials"
import P from "../../Atoms/P/P";
import Img from "../../Atoms/Img/Img";


function UserTestimonialsCarousel(){
    return(
        <div className="flex flex-col gap-8 py-2">
            <UserTestimonialsCarouselHeader />
            <div className="w-8/12 mx-auto flex items-center relative">
                <Swiper 
                modules={[Pagination,Navigation,Scrollbar,A11y,Autoplay]} 
                spaceBetween={40} slidesPerView={1} navigation={{nextEl:'.swiper-button-next ', prevEl:'.swiper-button-prev ',addIcons:false}} pagination={{clickable:true, el:'.swiper-pagination',background:"white",bulletClass: `swiper-pagination-bullet`,bulletActiveClass:`swiper-pagination-bullet-active`,renderBullet: (index, className) => {
               return `<span class="${className} custom-bullet"></span>`;
            }}}
                scrollbar={{draggable:true, el:'swiper-scrollbar'}} direction="horizontal" loop="true" speed={300} grabCursor:true autoplay={{delay:'3000',pauseOnMouseEnter:true}} 
                ally={{prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide'}} effect="creative" creativeEffect={{prev:{translate:[0,0,-400]},next:{translate:['100%',0,0]}}}
                className="swiper-container">
                    {
                        userTestimonialsArray.map((item,index)=>(
                                <SwiperSlide key={index} className="flex flex-col items-center justify-center gap-6 " style={{height:"300px"}}>
                                    <Img src={item.image} className="w-2/12 mx-auto rounded-full "></Img>
                                    <P className="text-center max-w-lg mx-auto text-gray-500">{item.comment}</P>
                                </SwiperSlide> 
                        ))
                    } 
                </Swiper>  
                <div  className='swiper-button-next'>
                    <Img src="/RightButtonSwiper.png"></Img>
                </div>
                <div  className=' swiper-button-prev'>
                    <Img src="/leftButtonSwiper.png"></Img>
                </div>
                <div className="swiper-pagination"></div>
            </div>    
        </div>
    )
}

export default UserTestimonialsCarousel