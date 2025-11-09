import {formInputList} from "../../../../Core/constans/FormArray"
import Button from "../../Atoms/Button/Button"
import Input from "../../Atoms/Input/Input"

function ContactForm(){
    return(
        <div>
           <form action="" className="flex flex-col gap-3 ">
            <div className="flex gap-2">
                {
                    formInputList.map((item,index)=>(
                        <Input key={index} placeholder={item.palaceholder} name={item.name} className="w-1/2 border-2 border-gray-200 rounded-xl py-3 text-xs px-5 outline-none"/>
                    ))
                }
            </div>
            <Input placeholder="Email" name="email" className="w-full border-2 border-gray-200 rounded-xl text-xs py-3 px-5 outline-none"/>
            <textarea className="border-2 border-gray-200 rounded-xl py-2 px-5 text-xs resize-none outline-none" rows="10" cols="4" placeholder="Message ..."/>
            <div className="flex justify-end pt-2">
                <Button type="submit" className="w-1/3 py-2 bg-[#1DAEFF] rounded-lg text-white">SEND</Button>
            </div>
            
           </form>
        </div>
    )
}

export default ContactForm