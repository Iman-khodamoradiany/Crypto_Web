import { ToastContainer } from "react-toastify";
import P from "../../Atoms/P/P";
import { Form, Formik } from "formik";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import SubmitLoginForm from "../../Moloculs/SumbitLoginForm/SubmitLoginForm";
import Icons from "../../Atoms/Icons/Icons";
import FormSignUp from "../../Moloculs/FormSignUp/FormSighUp";

function SighUp({ check, setCheck }) {
    return (
        <div className="flex justify-center items-center flex-col gap-5 w-1/4">
            <div className="mb-8">
                <Icons Name={"Logo"} />
            </div>
            <div className="flex justify-center items-center flex-col gap-7 w-full">
                <div>
                    <P className={"text-[#FFFFFFDE] text-[1.5vw] font-[NormalFont] font-bold"}>Welcom Back</P>
                </div>
                <FormSignUp check={check} setCheck={setCheck}/>
            </div>
        </div>
    )
}

export default SighUp