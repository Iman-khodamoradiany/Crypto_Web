import { Formik, Form } from "formik"
import SubmitLoginForm from "../../Moloculs/SumbitLoginForm/SubmitLoginForm"
import LoginForm from "../LoginForm/LoginForm"
import * as Yup from 'yup';
import { LoginUser } from "../../../../Core/Services/querys/LoginFunction";

function ValidateLoginForm() {

    const GetUser = LoginUser();

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
            onSubmit={() => {
                console.log("User Data:", GetUser.data);
            }}
        >
            <Form className="w-full flex justify-center items-center flex-col gap-8">
                <LoginForm />
                <SubmitLoginForm />
            </Form>
        </Formik>

    );
}

export default ValidateLoginForm;
