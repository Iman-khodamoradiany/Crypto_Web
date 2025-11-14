import Button from "../../Atoms/Button/Button"
import Icons from "../../Atoms/Icons/Icons"
import Input from "../../Atoms/Input/Input"
import P from "../../Atoms/P/P"

function FooterSubscribe() {
    return (
        <div className="w-1/4 flex justify-start h-full pt-5 items-start flex-col gap-7">
            <div>
                <P className={'font-bold text-[1.3vw] font-[Lafog]'}>Subscribe</P>
            </div>
            <div>
                <P className={'text-[#8F90A6] text-[1vw] w-[90%] font-[LufagLight]'}>Subscribe to get latest property, blog news from us</P>
            </div>
            <div className="w-11/12 flex justify-between px-3 items-center border-2 border-[#D0D0E3] dark:bg-white rounded-xl h-[55px]">
                <Input className={"h-full outline-none bg-transparent"} placeholder={"Email Address"} />
                <Button className={"w-[35px] h-[35px] bg-[#1DAEFF] rounded-full flex justify-center items-center"}>
                    <Icons Name={"ArrowRight"} />
                </Button>
            </div>
        </div>
    )
}

export default FooterSubscribe