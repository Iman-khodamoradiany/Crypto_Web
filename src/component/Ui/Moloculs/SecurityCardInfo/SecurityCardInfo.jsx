
import P from "../../Atoms/P/P"
import HexagonLockIconOfSecurityCardInfo from "../../Moloculs/HexagonLockIconOfSecurityCardInfo/HexagonLockIconOfSecurityCardInfo"

function SecurityCardInfo(){
    return(
        <div className="flex flex-row justify-end w-11/12  gap-6">
            <div className="flex flex-col gap-4 w-4/5">
                <HexagonLockIconOfSecurityCardInfo />
                <P className="text-5xl font-semibold dark:text-[white]">
                    Pellentesque ac tortor
                </P>
                <P className="text-gray-500 text-lg max-w-md">
                    Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est.
                </P>
            </div>
            
            <div className="w-3/5">
                <img src="/crypto_feature.png" alt="" className="w-full"/>
            </div>
        </div>
    )
}

export default SecurityCardInfo