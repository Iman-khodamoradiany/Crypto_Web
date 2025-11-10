import { useState } from "react"
import Button from "../../Atoms/Button/Button"
import Img from "../../Atoms/Img/Img"
import P from "../../Atoms/P/P"
import Input from "../../Atoms/Input/Input"
import Icons from "../../Atoms/Icons/Icons"

function Header() {
    const ListFilter = [
        { id: 1, title: "Sell" },
        { id: 2, title: "Buy" },
        { id: 3, title: "Rent" },
    ]
    const [active, setActive] = useState(1)
    return (
        <div className="h-[87vh] relative z-20 ">
            <Img className={'w-full h-full absolute'} src="./image/BGheader.jpg" alt="" />
            <div className="absolute  w-3/6 gap-5 h-5/6 right-[40%] flex justify-center items-start flex-col">
                <div className="w-full flex justify-start items-center">
                    <P className={'text-[3.7vw] w-3/4 font-bold'}>Easy way to find a
                        perfect property</P>
                </div>
                <div>
                    <P className={"text-[1.4vw] w-4/6 font-[NormalFont]"}>We provide a complete service for the sale,
                        purchase or rental of real estate.</P>
                </div>
                <div className="w-full">
                    <div className="flex justify-center items-start relative mt-8 flex-col w-full">
                        <div className="flex justify-start items-center gap-3">
                            {ListFilter.map((item) => (
                                <Button
                                    onClick={() => setActive(item.id)}
                                    className={`shadow-lg w-[80px] h-[50px] text-[0.9vw] font-bold rounded-xl font-[Button] ${active == item.id ? "text-white bg-[#1DAEFF]" : "bg-white text-black"
                                        }`} key={item.key}>{item.title}</Button>
                            ))}
                        </div>
                        <div className="w-full h-[55px] absolute -bottom-10 flex justify-start items-center gap-1">
                            <div className=" flex w-3/4 bg-white h-full shadow-lg rounded-md overflow-hidden">
                                <Input className={"placeholder:text-[1vw] outline-none px-5 text-[#6A6A6A] w-1/2"} placeholder="Enter keyword here ..." />
                                <div className="w-1/2">
                                    <div className="w-full pr-5 h-full flex justify-between items-center">
                                        <Button className={"text-[#6A6A6A] text-[1vw] border-l-[3px] border-[#3A8BEA] pl-3"}>Select Location</Button>
                                        <Icons Name={"ArrowBottom"} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/4 bg-white h-full rounded-md flex justify-between items-center pl-4 pr-1.5 py-1.5">
                                <div className="flex justify-center items-center scale-110">
                                    <Icons Name={"Settign"} />
                                </div>
                                <Button className={"w-3/4 h-full bg-[#1DAEFF] flex justify-center gap-3 items-center px-3 rounded-md"}>
                                    <div className="scale-100">
                                        <Icons Name={"Search"} />
                                    </div>
                                    <P className={"text-white"}>Search</P>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header