import ContactForm from "../../Moloculs/ContactForm/ContactForm"
import ContactInfo from "../../Moloculs/ContactUs-ContactInfo/ContactInfo"

function ContactUsSection(){
    return(
        <div className="w-9/12 mx-auto grid grid-cols-3 gap-12">
            <div className="col-span-2">
                <ContactForm />
            </div>
            <div>
                <ContactInfo />
            </div>
        </div>
    )
}

export default ContactUsSection