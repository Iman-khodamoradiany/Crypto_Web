import { Route, Routes } from "react-router"
import HomePage from "./component/Ui/Page/HomePage/HomePage"
import AboutUs from "./component/Ui/Page/AboutUs/AboutUs"
import Layout from "./component/Partial/Layout"
import ContactUs from "./component/Ui/Page/ContactUs/ContactUs"
import ProductDetail from "./component/Ui/Page/ProductDetail/ProductDetail"
import LoginPage from "./component/Ui/Page/LoginPage/LoginPage"
import MarketPlacePage from "./component/Ui/Page/MarketPlace/MarketPlacePage"
import NotFound from "./component/Ui/Page/NotFound/NotFound"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/market" element={<MarketPlacePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes >
    </Layout >
  )
}

export default App
