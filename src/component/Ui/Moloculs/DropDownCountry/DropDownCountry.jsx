import { useState } from "react"
import DropDown from "../DropDown/DropDown";
import CountryDropDown from "../CountryDropDown/CountryDropDown";

function DropDownCountry() {
    const [active, setActive] = useState(false);
    const [category, setCategory] = useState(null);

    return (
        <div className="w-1/2 relative">
            <DropDown category={category} setActive={setActive} setCategory={setCategory} active={active}/>
            <CountryDropDown setActive={setActive} setCategory={setCategory} active={active}/>
        </div>
    )
}

export default DropDownCountry