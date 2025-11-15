import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"
import { contactInfoList, SocialMediaIconList } from "../../../../Core/constans/ContactInfoArray"
import { useContext } from "react"
import { MyContext } from "../../../Partial/Layout"

function ContactInfo() {
    const { isdarkMode } = useContext(MyContext)
    return (
        <div className="flex flex-col gap-9 dark:text-white">
            <div className="flex flex-col gap-2">
                <P className="text-[clamp(1rem,2vw,2.8rem)] max-w-xl  dark:text-white">Contact Information</P>
                <P className="text-[clamp(0.5rem,1vw,1.8rem)] max-w-lg text-gray-500 dark:text-white">Say something to start a live chat!</P>
            </div>
            <div className="flex flex-col gap-8">
                {
                    contactInfoList.map((item, index) => (
                        <div key={index} className="flex gap-5 text-gray-500">
                            <Icons Name={isdarkMode ? item.Licon : item.icon} />
                            <P className="text-[clamp(0.5rem,1vw,1.8rem)] max-w-lg dark:text-white">{item.text}</P>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-start gap-6">
                {
                    SocialMediaIconList.map((item, index) => (
                        <div key={index}>
                            <Icons Name={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ContactInfo