import { Formik, Form } from "formik"
import SubmitLoginForm from "../../Moloculs/SumbitLoginForm/SubmitLoginForm"
import LoginForm from "../LoginForm/LoginForm"
import * as Yup from 'yup';
import { LoginUser } from "../../../../Core/Services/querys/LoginFunction";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Core/context/AuthContext";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

function ValidateLoginForm({ setCheck, check }) {
    const { Login, SubmitLogin } = useContext(AuthContext)
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter your email correctly.")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be 8 digits.")
    });


    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(value) => SubmitLogin(value)}
        >
            <Form className="w-full flex justify-center items-center flex-col gap-8">
                <ToastContainer />
                <LoginForm />
                <SubmitLoginForm check={check} setCheck={setCheck} />
            </Form>
        </Formik>

    );
}

export default ValidateLoginForm;
