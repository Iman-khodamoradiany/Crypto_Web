import { createContext, useState } from "react"
import { toast } from "react-toastify"
import { LoginUser } from "../Services/querys/LoginFunction"
import { useNavigate } from "react-router"
import { SendData } from "../Services/Moutaions/SignUp"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const GetUser = LoginUser();
    const SendUser = SendData()
    const navigate = useNavigate()

    const [user, setUser] = useState(() => {
        const users = localStorage.getItem("user")
        return users ? JSON.parse(users) : null
    })

    const Login = (Token) => {
        const userData = { Token }
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const SubmitLogin = (value) => {
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

    const SubmitSignUp = (value) => {
        const Data = { Email: value.email, Password: value.password, Role: 'User' }
        SendUser.mutate(Data, {
            onSuccess: (res) => {
                const role = res.Role || "user";
                Login(role);
                toast.success("You are registered and logged in!", {
                    position: "top-right",
                });
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            },
        });
    };


    return (
        <AuthContext.Provider value={{ user, Login, SubmitLogin, SubmitSignUp }}>
            {children}
        </AuthContext.Provider>
    )
} 