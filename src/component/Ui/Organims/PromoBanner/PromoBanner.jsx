import P from "../../Atoms/P/P"
import Img from "../../Atoms/Img/Img"
import Button from "../../Atoms/Button/Button"

function PromoBanner(){
    return(
        <div className="flex relative z-30 w-10/12 mx-auto rounded-xl">
            <div className="bg-[#cfe7f1] flex flex-col gap-9 items-start justify-center ps-[4vw] rounded-s-3xl">
                <P className="text-[clamp(1.8rem,2.8vw,3rem)] font-extrabold max-w-[25vw]">Find your best Real Estate</P>
                <P className="text-[clamp(0.7rem,1.4vw,2rem)] text-[#585981] max-w-[34vw] leading-loose">We provide a complete service for the sale,
                  purchase or rental of real estate.
                </P>
                <Button className="py-2 px-11 bg-[#1DAEFF] max-w-[15vw] rounded-xl text-white">Contact Us</Button>
            </div>
            <div>
                <Img src="/image/simone-hutsch-8n9npBvQUWg-unsplash 1.png" className="rounded-e-3xl"/>
            </div>
        </div>
    )
}

export default PromoBanner