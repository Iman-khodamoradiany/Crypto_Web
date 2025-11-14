import { countrys } from "../../../../Core/constans/countrys"
import Button from "../../Atoms/Button/Button"

function CountryDropDown({setActive , setCategory , active}) {
    const handelButtonCountry = (country) => {
        setCategory(country)
        setActive(false)
    }
    return (
        <div className={`transition-all duration-500 ${active ? "opacity-1 h-[170px]" : 'opacity-0 h-0'} flex justify-start items-end gap-4 px-4 shadow-lg  overflow-auto py-3 absolute top-10 dark:bg-[#0E1012] bg-white w-full flex-col`}>
            {countrys.map((item) => (
                <Button
                    onClick={() => handelButtonCountry(item.en)}
                    className={"transition-all duration-500 rounded-md p-2 cursor-pointer dark:text-white hover:bg-[#1DAEFF] hover:text-white w-full text-right"}>{item.en}</Button>
            ))}
        </div>
    )
}

export default CountryDropDown