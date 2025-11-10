import ContactForm from "../../Moloculs/ContactForm/ContactForm"
import ContactInfo from "../../Moloculs/ContactUs-ContactInfo/ContactInfo"
import Icons from "../../Atoms/Icons/Icons"

function ContactUsSection(){
    return(
        <div className="flex flex-col gap-20">
            <div className="relative -z-10">
                <div className="absolute -top-24">
                    <Icons Name={'grayHexagon1-contactUs'} />
                </div>
                <div className="absolute -top-8 left-8">
                    <Icons Name={'orangeHexagon2-contactUs'} />
                </div>
                <div className="absolute top-3 left-20">
                    <Icons Name={'grayHexagon3-contactUs'} />
                </div>
                <div className="absolute top-24 left-1">
                    <Icons Name={'grayHexagon4-contactUs'} />
                </div>
            </div>
            <div className="w-9/12 mx-auto grid grid-cols-3 gap-12 pt-10">
                <div className="col-span-2">
                    <ContactForm />
                </div>
                <div>
                    <ContactInfo />
                </div>
            </div>
            <div className="relative -z-10">
                <div>
                    <div className="absolute -top-64 right-16">
                        <Icons Name={'grayHexagon5-contactUs'} />
                    </div>
                    <div className="absolute -top-48 right-2">
                        <Icons Name={'greenHexagon6-contactUs'} />
                    </div>
                    <div className="absolute -top-28 right-0">
                        <Icons Name={'grayHexagon7-contactUs'} />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ContactUsSection