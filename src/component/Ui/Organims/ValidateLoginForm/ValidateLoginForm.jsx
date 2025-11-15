import { Formik, Form } from "formik"
import SubmitLoginForm from "../../Moloculs/SumbitLoginForm/SubmitLoginForm"
import LoginForm from "../LoginForm/LoginForm"
import * as Yup from 'yup';
import { LoginUser } from "../../../../Core/Services/querys/LoginFunction";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Core/context/AuthContext";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

function ValidateLoginForm() {
    const [allUser, setAllUser] = useState();
    const GetUser = LoginUser();
    const { Login } = useContext(AuthContext)
    const navigate = useNavigate()
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter your email correctly.")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be 8 digits.")
    });

    const Submit = (value) => {
        const users = GetUser.data;
        const foundUser = users.find(
            (item) => item.Email === value.email && item.Password === value.password
        );

        if (foundUser) {
            Login(foundUser.Role);
            toast.success("You are logged in", {
                position: 'top-right'
            })
            setTimeout(() => {
                navigate("/")
            }, 4000);
        } else {
            toast.error("Not Found User...", {
                position: 'top-right'
            })
        }

    }

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(value) => Submit(value)}

        >
            <Form className="w-full flex justify-center items-center flex-col gap-8">
                <ToastContainer />
                <LoginForm />
                <SubmitLoginForm />
            </Form>
        </Formik>

    );
}

export default ValidateLoginForm;
