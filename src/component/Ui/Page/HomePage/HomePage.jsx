import Header from "../../Organims/Header/Header"
import FinancialOverViewSection from "../../Organims/FinancialOverviewSection/FinancialOverviewSection"
import CountryShowcase from "../../Organims/CountryShowcase/CountryShowcase"
import NewPropertiesSection from "../../Organims/NewPropertiesSection/NewPropertiesSection"
import PromoBanner from "../../Organims/PromoBanner/PromoBanner"
function HomePage() {
    return (
        <div>
            <Header />
            <FinancialOverViewSection />
            <CountryShowcase />
            <NewPropertiesSection />
            <PromoBanner />
        </div>
    )
}

export default HomePage