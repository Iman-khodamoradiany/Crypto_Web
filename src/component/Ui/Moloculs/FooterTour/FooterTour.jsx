import { Link } from "react-router"
import P from "../../Atoms/P/P"

function FooterTour() {
    const ListFooter = [
        { Id: 1, Title: 'Features', Link: '' },
        { Id: 2, Title: 'Partner', Link: '' },
        { Id: 3, Title: 'Pricing', Link: '' },
        { Id: 4, Title: 'Product', Link: '' },
        { Id: 5, Title: 'Support', Link: '' },
    ]
    return (
        <div className="w-1/4 h-full flex justify-center items-center">
            <ul className="flex justify-between items-start flex-col h-full FooterUl pt-5">
                <li>
                    <P>Take a tour</P>
                </li>
                {ListFooter.map((item) => (
                    <li key={item.Id}>
                        <Link to={item.Link}>{item.Title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterTour