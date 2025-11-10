import Icons from "../../Atoms/Icons/Icons"

function HexagonLockIconOfSecurityCardInfo(){
    return(
        <div className="flex justify-start items-start relative h-20">
            <div className="LockIcon absolute z-10 left-2.5">
                <div className="relative w-fit">
                    <Icons Name={'lock'} />
                    <div className="absolute top-8 right-4 z-20">
                        <Icons Name={'centerOfLock'} />
                    </div>
               </div>
            </div>
            <div className="absolute left-0">
                <Icons Name={'HexagonAsBgOfLock'} />
            </div>
        </div>
    )
}

export default HexagonLockIconOfSecurityCardInfo