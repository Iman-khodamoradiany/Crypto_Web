import NavBar from "../Ui/Organims/NavBar/NavBar";

function Layout({children}){
    return(
        <div>
            <header className="h-[100vh]">
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                
            </footer>
        </div>
    )
}

export default Layout