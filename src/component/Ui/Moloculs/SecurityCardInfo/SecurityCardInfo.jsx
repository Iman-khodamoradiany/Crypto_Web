import Img from "../../Atoms/Img/Img"
import P from "../../Atoms/P/P"
import HexagonLockIconOfSecurityCardInfo from "../../Moloculs/HexagonLockIconOfSecurityCardInfo/HexagonLockIconOfSecurityCardInfo"

function SecurityCardInfo(){
    return(
        <div className="flex flex-row justify-end w-11/12 gap-6 py-[4vw]">
            <div className="flex flex-col gap-4 w-4/5">
                <HexagonLockIconOfSecurityCardInfo />
                <P className="text-[clamp(1.8rem,3.6vw,4rem)] mx-w-xl  font-semibold dark:text-[white]">
                    Pellentesque ac tortor
                </P>
                <P className="text-gray-500 text-[clamp(1.rem,1.8vw,2.2rem)] max-w-lg leading-loose">
                    Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est.
                </P>
            </div>
            
            <div className="w-3/5">
                <Img src="/crypto_feature.png" alt="" className="w-full"/>
            </div>
        </div>
    )
}

export default SecurityCardInfo