import ContactForm from "../../Moloculs/ContactForm/ContactForm"
import ContactInfo from "../../Moloculs/ContactUs-ContactInfo/ContactInfo"
import HexagonsAsBgOfContactUsBottom from "../../Moloculs/HexagonsAsBgOfContactUs-Bottom/HexagonsAsBgOfContactUsBottom"
import HexagonsAsBgOfContactUsTop from "../../Moloculs/HexagonsAsBgOfContactUs-Top/HexagonsAsBgOfContactUsTop"
function ContactUsSection(){
    return(
        <div className="flex flex-col gap-20 dark:bg-[black]">
           <HexagonsAsBgOfContactUsTop />
            <div className="w-9/12 mx-auto grid grid-cols-3 gap-12 pt-10 z-10">
                <div className="col-span-2">
                    <ContactForm />
                </div>
                <div>
                    <ContactInfo />
                </div>
            </div>
            <HexagonsAsBgOfContactUsBottom />
        </div>
        
    )
}

export default ContactUsSection