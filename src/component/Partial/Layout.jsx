import Footer from "../Ui/Organims/Footer/Footer";
import NavBar from "../Ui/Organims/NavBar/NavBar";

function Layout({children}){
    return(
        <div>
            <header className="h-[13vh]">
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout