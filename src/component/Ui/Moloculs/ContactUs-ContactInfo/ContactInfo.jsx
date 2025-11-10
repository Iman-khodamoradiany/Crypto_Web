import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"
import {contactInfoList,SocialMediaIconList} from "../../../../Core/constans/ContactInfoArray"

function ContactInfo(){
    return(
        <div className="flex flex-col gap-9">
           <div className="flex flex-col gap-2">
               <P className="text-2xl ">Contact Information</P>
               <P className="text-sm text-gray-500">Say something to start a live chat!</P>
           </div>
           <div className="flex flex-col gap-8">
               {
                contactInfoList.map((item,index)=>(
                    <div key={index} className="flex gap-5 text-gray-500">
                        <Icons Name={item.icon} />
                        <P className="text-xs">{item.text}</P>
                    </div>
                ))
               }
           </div>
           <div className="flex justify-start gap-6">
              {
                SocialMediaIconList.map((item,index)=>(
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