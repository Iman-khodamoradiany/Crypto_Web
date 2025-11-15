import Icons from "../../Atoms/Icons/Icons";
import P from "../../Atoms/P/P";
import ValidateLoginForm from "../ValidateLoginForm/ValidateLoginForm";

function Login({ setCheck , check }) {
    return (
        <div className="flex justify-center items-center flex-col gap-5 w-1/4">
            <div className="mb-8">
                <Icons Name={"Logo"} />
            </div>
            <div className="flex justify-center items-center flex-col gap-7 w-full">
                <div>
                    <P className={"text-[#FFFFFFDE] text-[1.5vw] font-[NormalFont] font-bold"}>Welcom Back</P>
                </div>
                <ValidateLoginForm check={check} setCheck={setCheck} />
            </div>
        </div>
    )
}

export default Login