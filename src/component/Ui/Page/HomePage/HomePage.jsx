import Header from "../../Organims/Header/Header"
import FinancialOverViewSection from "../../Organims/FinancialOverviewSection/FinancialOverviewSection"
import CountryShowcase from "../../Organims/CountryShowcase/CountryShowcase"
import NewPropertiesSection from "../../Organims/NewPropertiesSection/NewPropertiesSection"
function HomePage() {
    return (
        <div>
            <Header />
            <FinancialOverViewSection />
            <CountryShowcase />
            <NewPropertiesSection />
        </div>
    )
}

export default HomePage