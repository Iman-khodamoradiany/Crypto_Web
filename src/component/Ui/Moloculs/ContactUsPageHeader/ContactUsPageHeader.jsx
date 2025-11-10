import Img from "../../Atoms/Img/Img"
import P from "../../Atoms/P/P"

function ContactUsPageHeader(){
    return(
        <div className="bg-[url('/public/ContactUsImages/Banner.png')] bg-center bg-cover min-h-72">
            <div className="w-11/12 mx-auto flex justify-between">
                <div className="flex flex-col gap-6 text-white justify-center">
                    <P className="text-5xl">
                       Contact us
                    </P>
                    <P className="max-w-md">
                        We provide a complete service for the sale,
                        purchase or rental of real estate.
                    </P>
                </div>
                <Img src="/public/ContactUsImages/Building.png"></Img>
            </div>
        </div>
    )
}

export default ContactUsPageHeader