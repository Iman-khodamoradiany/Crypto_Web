import { Link } from "react-router";
import Img from "../../Atoms/Img/Img";

function Logo() {
    return (
        <div>
            <Link to={'/'}>
                <Img src={'./image/Logo.png'} />
            </Link>
        </div>
    )
}

export default Logo