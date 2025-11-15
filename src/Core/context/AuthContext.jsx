import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const users = localStorage.getItem("user")
        return users ? JSON.parse(users) : null
    })

    const Login = (Token) => {
        const userData = { Token }
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    return (
        <AuthContext.Provider value={{ user, Login }}>
            {children}
        </AuthContext.Provider>
    )
} 