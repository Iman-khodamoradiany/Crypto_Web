import { Link } from "react-router"
import P from "../../Atoms/P/P"

function CompanyList() {
    const CompanyListData = [
        { Id: 1, Title: 'About Us', Link: '' },
        { Id: 2, Title: 'Agents', Link: '' },
        { Id: 3, Title: 'Blog', Link: '' },
        { Id: 4, Title: 'Media', Link: '' },
        { Id: 5, Title: 'Contact Us', Link: '' },
    ]
    return (
        <div className=" h-full flex justify-start items-center pt-5">
            <ul className="FooterUl flex justify-between items-start flex-col h-full">
                <li>
                    <P className={'font-[Lafog]'}>Our Company</P>
                </li>
                {CompanyListData.map((item) => (
                    <li>
                        <Link className={'font-[Lafog]'} to={item.Link}>{item.Title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyList