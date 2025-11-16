import Img from "../../Atoms/Img/Img"
import P from "../../Atoms/P/P"

function ContactUsPageHeader() {
    return (
        <div className="bg-[url('/public/image/ContactUsImages/Banner.png')] relative bg-center bg-cover h-[45vh] z-30">
            <div className="w-11/12 mx-auto flex justify-between h-full">
                <div className="flex flex-col gap-6 text-white justify-center item-start h-full">
                    <P className="text-[clamp(1.8rem,3.6vw,4rem)] max-w-2xl">
                        Contact us
                    </P>
                    <P className="text-[clamp(1.rem,1.8vw,2.2rem)] max-w-sm">
                        We provide a complete service for the sale,
                        purchase or rental of real estate.
                    </P>
                </div>
                <Img className={'absolute right-24 bottom-0'} src="/public/image/ContactUsImages/Building.png"></Img>
            </div>
        </div>
    )
}

export default ContactUsPageHeader