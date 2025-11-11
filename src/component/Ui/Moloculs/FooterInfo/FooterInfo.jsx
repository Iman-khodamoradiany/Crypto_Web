import Icons from "../../Atoms/Icons/Icons";
import Img from "../../Atoms/Img/Img";
import P from "../../Atoms/P/P";

function FooterInfo() {
    const IconList = [
        { id: 1, icon: 'Facbook' },
        { id: 2, icon: 'Twiter' },
        { id: 3, icon: 'Inestagram' },
        { id: 4, icon: 'Linkdin' },
    ]
    return (
        <div className="flex h-full justify-between items-start flex-col w-1/4">
            <div>
                <Img src={'./image/Logo.png'} />
            </div>
            <div className="w-full">
                <P className="w-full text-[0.73vw] text-[#8F90A6] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </P>
            </div>
            <div className="flex justify-center gap-8 items-center">
                {IconList.map((item) => (
                    <Icons Name={item.icon} />
                ))}
            </div>
            <div>
                <P className={'text-[#8F90A6] text-[0.9vw]'}>© 2021 . All rights reserved.</P>
            </div>
        </div>
    )
}
export default FooterInfo