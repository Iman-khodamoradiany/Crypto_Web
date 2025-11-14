import { useLocation, useParams } from "react-router";
import Footer from "../Ui/Organims/Footer/Footer";
import NavBar from "../Ui/Organims/NavBar/NavBar";

function Layout({ children }) {
    const Pathname = useLocation();
    return (
        <div>
            <header className={`h-[13vh] ${Pathname.pathname == '/Login' && 'hidden'}`}>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer className={`w-full ${Pathname.pathname == "/Login" && 'hidden'}`}>
                <Footer />
            </footer>
        </div >
    )
}

export default Layout