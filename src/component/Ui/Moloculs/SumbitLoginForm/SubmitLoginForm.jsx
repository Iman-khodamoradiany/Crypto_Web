import { Link } from "react-router";
import Button from "../../Atoms/Button/Button";
import P from "../../Atoms/P/P";
import { useFormikContext } from "formik";

function SubmitLoginForm() {
    const {handleSubmit} = useFormikContext()
    return (
        <div className="w-full flex justify-center items-center flex-col gap-4">
            <button type={"submit"} onClick={handleSubmit} className="w-full text-center tracking-[0.1em] font-semibold h-[50px] font-[NormalFont] text-white py-1 rounded-xl bg-[#1DAEFF]">
                SIGN IN
            </button>
            <div className="flex justify-center items-center text-[1vw] gap-2">
                <P className={"text-[#8F90A6]"}>Don’t you have account ?</P>
                <Link className="text-[#1DAEFF]">Sign up</Link>
            </div>
        </div >
    )
}

export default SubmitLoginForm