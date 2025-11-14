import { createContext, useState } from "react";
import Footer from "../Ui/Organims/Footer/Footer";
import NavBar from "../Ui/Organims/NavBar/NavBar";

export const MyContext = createContext()
function Layout({ children }) {

    const [isdarkMode, setIsDarkMode] = useState(false)

    return (
        <MyContext.Provider value={{isdarkMode , setIsDarkMode}}>
            <header className="h-[13vh]">
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer className="w-full">
                <Footer />
            </footer>
        </MyContext.Provider>
    )
}

export default Layout