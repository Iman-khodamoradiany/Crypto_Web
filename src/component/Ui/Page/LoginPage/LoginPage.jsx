import { Link } from "react-router"
import Icons from "../../Atoms/Icons/Icons"
import Input from "../../Atoms/Input/Input"
import P from "../../Atoms/P/P"
import Button from "../../Atoms/Button/Button"
import LoginForm from "../../Organims/LoginForm/LoginForm"
import SubmitLoginForm from "../../Moloculs/SumbitLoginForm/SubmitLoginForm"
import ValidateLoginForm from "../../Organims/ValidateLoginForm/ValidateLoginForm"

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
                    <ValidateLoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage