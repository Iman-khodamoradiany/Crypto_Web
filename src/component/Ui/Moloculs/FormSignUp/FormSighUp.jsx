import { Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import SignUpForm from "../../Organims/SignUpForm/SignUpForm";
import SubmitLoginForm from "../SumbitLoginForm/SubmitLoginForm";
import * as Yup from 'yup';
import { useContext } from "react";
import { AuthContext } from "../../../../Core/context/AuthContext";

function FormSignUp({ check, setCheck }) {
    const { SubmitSignUp } = useContext(AuthContext)
    const SignUp = Yup.object().shape({
        email: Yup.string()
            .email("Please enter your email correctly.")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be 8 digits."),
        Confirm: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
    });
    return (
        <Formik
            initialValues={{ email: "", password: "", Confirm: "" }}
            validationSchema={SignUp}
            onSubmit={(value) => SubmitSignUp(value)}
        >
            <Form className="w-full flex justify-center items-center flex-col gap-8">
                <ToastContainer />
                <SignUpForm />
                <SubmitLoginForm check={check} setCheck={setCheck} />
            </Form>
        </Formik>
    )
}

export default FormSignUp