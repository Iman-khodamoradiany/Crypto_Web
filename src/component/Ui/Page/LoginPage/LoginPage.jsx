import { useState } from "react"
import Login from "../../Organims/Login/Login"
import SighUp from "../../Organims/SignUp/SignUp"

function LoginPage() {
    const [Check, setCheck] = useState(false)
    return (
        <div className="w-full flex justify-center items-center h-[100vh] bg-[linear-gradient(to_right,#00000073,#00000073),url('/image/BGlogin.jpg')] bg-no-repeat bg-center bg-cover">
            {Check ? <SighUp check={Check} setCheck={setCheck} /> : <Login check={Check} setCheck={setCheck} />}
        </div>
    )
}

export default LoginPage