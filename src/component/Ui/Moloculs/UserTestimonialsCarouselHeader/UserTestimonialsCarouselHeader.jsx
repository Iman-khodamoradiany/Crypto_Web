import P from "../../Atoms/P/P"
import Icons from "../../Atoms/Icons/Icons"

function UserTestimonialsCarouselHeader(){
    return(
        <div className="flex flex-col items-center gap-8">
            <Icons Name={'hexagonInUserTestimonialsTitle'} />
            <div className="flex flex-col gap-4 dark:text-[white]">
                <P className="text-[clamp(1.8rem,3.6vw,4rem)] max-w-2xl font-semibold text-center ">What our members said ?</P>
                <P className="text-[clamp(1.rem,1.8vw,2.2rem)] max-w-lg text-gray-500 text-center">Nam sollicitudin dignissim nunc, cursus ullamcorper.</P>
            </div>
        </div>
            
    )
}

export default UserTestimonialsCarouselHeader