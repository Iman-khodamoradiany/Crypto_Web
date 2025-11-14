import P from "../../Atoms/P/P"
import {countryShowcaseList} from "../../../../Core/constans/countryShowcaseArray"
function CountryShowcase(){
    return(
        <div className="flex flex-col gap-10 items-center justify-center ">
            <P className="text-[clamp(1.3rem,2.2vw,2.8rem)] text-center font-bold max-w-md">We are available in many
               well-known countries
            </P>
            <div className="grid grid-cols-4 gap-4 w-10/12 items-center">
                {
                    countryShowcaseList.map((item,index)=>(
                        <div key={index} className="min-h-[426px] bg-cover bg-center rounded-2xl flex flex-col items-center justify-start pt-[2.5vw]" style={{backgroundImage:`url(${item.image})`}}>
                            <P className="text-[clamp(1.2rem,1.6vw,2.2rem)] font-semibold">{item.title}</P>
                        </div>
                    ))
                }
            </div>
       </div>
    )
}


export default CountryShowcase