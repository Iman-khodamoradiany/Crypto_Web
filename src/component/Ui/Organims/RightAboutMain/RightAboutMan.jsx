import Icons from "../../Atoms/Icons/Icons"
import P from "../../Atoms/P/P"

function RightAboutMain() {
    return (
        <div className="w-1/2 h-full bg-[url(./image/BG.svg)] bg-no-repeat relative">
            <div className="flex gap-1 justify-center absolute dark:bg-[#0E1012] text-white right-24 top-8 items-start flex-col bg-white shadow-sm w-fit py-5 pl-5 rounded-3xl pr-10">
                <Icons Name={"Box"} />
                <P className={"text-[1.5vw] font-bold"}>+20M</P>
                <P>Open Wallets</P>
            </div>
            <div className="flex gap-1 justify-center absolute dark:bg-[#0E1012] text-white left-24 top-1/4 items-start flex-col bg-white shadow-md w-fit py-5 pl-5 rounded-3xl pr-10">
                <Icons Name={"Coin"} />
                <P className={"text-[1.5vw] font-bold"}>+100</P>
                <P>Supported Coins</P>
            </div>
            <div className="flex gap-1 justify-center absolute dark:bg-[#0E1012] text-white right-24 top-[55%] items-start flex-col bg-white shadow-sm w-fit py-5 pl-5 rounded-3xl pr-10">
                <Icons Name={"Heart"} />
                <P className={'text-[1.5vw] font-bold'}>+50M</P>
                <P>USD Invested</P>
            </div>
            <div className="flex gap-1 justify-center absolute dark:bg-[#0E1012] text-white bottom-0 left-24 items-start flex-col bg-white shadow-sm w-fit py-5 pl-5 rounded-3xl pr-20">
                <Icons Name={"Human"} />
                <P className={"text-[1.5vw] font-bold"}>+200k</P>
                <P>Registered Users</P>
            </div>
        </div>
    )
}

export default RightAboutMain