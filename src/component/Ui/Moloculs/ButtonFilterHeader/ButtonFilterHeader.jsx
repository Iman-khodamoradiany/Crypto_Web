import Button from "../../Atoms/Button/Button";

function ButtonFilterHeader() {
    const [active, setActive] = useState(1)

    const ListFilter = [
        { id: 1, title: "Sell" },
        { id: 2, title: "Buy" },
        { id: 3, title: "Rent" },
    ]
    return (
        <div className="flex justify-start items-center gap-3">
            {ListFilter.map((item) => (
                <Button
                    onClick={() => setActive(item.id)}
                    className={`shadow-lg w-[80px] h-[50px] text-[0.9vw] font-bold rounded-xl font-[Button] ${active == item.id ? "text-white bg-[#1DAEFF]" : "bg-white text-black"
                        }`} key={item.key}>{item.title}</Button>
            ))}
        </div>
    )
}

export default ButtonFilterHeader;