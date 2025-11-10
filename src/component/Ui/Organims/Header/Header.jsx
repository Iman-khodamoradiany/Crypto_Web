import { useState } from "react"
import Button from "../../Atoms/Button/Button"
import Img from "../../Atoms/Img/Img"
import P from "../../Atoms/P/P"
import Input from "../../Atoms/Input/Input"

function Header() {
    const ListFilter = [
        {id: 1 , title: "Sell"},
        {id: 2 , title: "Buy"},
        {id: 3 , title: "Rent"},
    ]
    const [active , setActive] = useState(0)
    return (
        <div className="h-[87vh] relative z-20">
            <Img className={'w-full h-full absolute'} src="./image/BGheader.jpg" alt="" />
            <div className="absolute w-1/3 gap-5 h-3/4 right-[60%] flex justify-center items-start flex-col">
                <div className="w-full flex justify-end items-center">
                    <P className={'text-[3.5vw] font-bold'}>Easy way to find a
                        perfect property</P>
                </div>
                <div>
                    <P className={"text-[1.4vw] font-[NormalFont]"}>We provide a complete service for the sale,
                        purchase or rental of real estate.</P>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-2">
                        {ListFilter.map((item) => (
                            <Button
                            onClick={() => setActive(item.id)}
                             className={`shadow-lg w-[80px] h-[50px] text-[0.9vw] font-bold rounded-xl font-[Button] ${
                                active == item.id ? "text-white bg-[#1DAEFF]" : "bg-white text-black"
                            }`} key={item.key}>{item.title}</Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header