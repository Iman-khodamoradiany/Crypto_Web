import ContactForm from "../../Moloculs/ContactForm/ContactForm"
import ContactInfo from "../../Moloculs/ContactUs-ContactInfo/ContactInfo"

function ContactUsSection(){
    return(
        <div className="w-10/12 mx-auto grid grid-cols-3 border-2 border-yellow-300">
            <div className="col-span-2 border-2 border-orange-400">
                <ContactForm />
            </div>
            <div className="border-2 border-red-400">
                <ContactInfo />
            </div>
        </div>
    )
}

export default ContactUsSection