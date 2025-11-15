import { createContext, useState } from "react"
import { toast } from "react-toastify"
import { LoginUser } from "../Services/querys/LoginFunction"
import { useNavigate } from "react-router"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const GetUser = LoginUser();
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

    return (
        <AuthContext.Provider value={{ user, Login, SubmitLogin }}>
            {children}
        </AuthContext.Provider>
    )
} 