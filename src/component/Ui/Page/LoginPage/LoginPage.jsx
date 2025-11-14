import { Link } from "react-router"
import Icons from "../../Atoms/Icons/Icons"
import Input from "../../Atoms/Input/Input"
import P from "../../Atoms/P/P"
import Button from "../../Atoms/Button/Button"

function LoginPage() {
    return (
        <div className="w-full flex justify-center items-center h-[100vh] bg-[linear-gradient(to_right,#00000073,#00000073),url('/image/BGlogin.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="flex justify-center items-center flex-col gap-5 w-1/4">
                <div className="mb-8">
                    <Icons Name={"Logo"} />
                </div>
                <div className="flex justify-center items-center flex-col gap-7 w-full">
                    <div>
                        <P className={"text-[#FFFFFFDE] text-[1.5vw] font-[NormalFont] font-bold"}>Welcom Back</P>
                    </div>
                    <div className="w-full">
                        <form action="" className="w-full flex justify-center items-center flex-col gap-4">
                            <div className="w-full flex justify-start items-center h-[50px] rounded-xl overflow-hidden bg-white gap-2 px-4">
                                <Icons Name={'Man'} />
                                <Input className={'w-full h-full placeholder:font-[LightMotserrat] placeholder:text-[0.9vw] outline-none'} placeholder={"Email Address"} />
                            </div>
                            <div className="w-full flex justify-start items-center h-[50px] rounded-xl overflow-hidden bg-white gap-2 px-4">
                                <Icons Name={'Password'} />
                                <Input className={'w-full h-full placeholder:font-[LightMotserrat] placeholder:text-[0.9vw] outline-none'} type={"password"} placeholder={"Password"} />
                            </div>
                            <div className="w-full flex justify-between items-cente">
                                <div className="flex justify-center items-center">
                                    <Input type={"checkbox"} />
                                    <P className={"text-[#1DAEFF]"}>Remeber me</P>
                                </div>
                                <div>
                                    <Link className="text-[#1DAEFF]">Forget Password?</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full flex justify-center items-center flex-col gap-4">
                        <Button className="w-full text-center tracking-[0.1em] font-semibold h-[50px] font-[NormalFont] text-white py-1 rounded-xl bg-[#1DAEFF]">
                            SIGN IN
                        </Button>
                        <div className="flex justify-center items-center text-[1vw] gap-3">
                            <P className={"text-[#8F90A6]"}>Don’t you have account ?</P>
                            <Link className="text-[#1DAEFF]">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage