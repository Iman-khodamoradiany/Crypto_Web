import { Link } from "react-router";
import Icons from "../../Atoms/Icons/Icons";
import Input from "../../Atoms/Input/Input";
import P from "../../Atoms/P/P";
import { Field, useFormikContext } from "formik";

function LoginForm() {
    const { errors } = useFormikContext()
    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-start flex-col gap-4">
                <div className="w-full flex justify-start items-center h-[50px] rounded-xl overflow-hidden bg-white gap-2 px-4">
                    <Icons Name={'Man'} />
                    <Field name={'email'} className={'w-full h-full placeholder:font-[LightMotserrat] placeholder:text-[0.9vw] outline-none'} placeholder={"Email Address"} />
                </div>
                {errors.email && <P className={"text-red-500 w-full"}>{errors.email}</P>}

                <div className="w-full flex justify-start items-center h-[50px] rounded-xl overflow-hidden bg-white gap-2 px-4">
                    <Icons Name={'Password'} />
                    <Field name={"password"} className={'w-full h-full placeholder:font-[LightMotserrat] placeholder:text-[0.9vw] outline-none'} type={"password"} placeholder={"Password"} />
                </div>
                {errors.password && <P className={"text-red-500 w-full"}>{errors.password}</P>}
                <div className="w-full flex justify-between items-cente">
                    <div className="flex justify-center items-center gap-1">
                        <Input type={"checkbox"} />
                        <P className={"text-[#1DAEFF]"}>Remeber me</P>
                    </div>

                    <div>
                        <Link className="text-[#1DAEFF]">Forget Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm