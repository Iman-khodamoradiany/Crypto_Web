import Header from "../../Organims/Header/Header"
import FinancialOverViewSection from "../../Organims/FinancialOverviewSection/FinancialOverviewSection"
import CountryShowcase from "../../Organims/CountryShowcase/CountryShowcase"
function HomePage() {
    return (
        <div>
            <Header />
            <FinancialOverViewSection />
            <CountryShowcase />
            <div>حجاز</div>
        </div>
    )
}

export default HomePage