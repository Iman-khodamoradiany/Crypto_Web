import { Route, Routes } from "react-router"
import HomePage from "./component/Ui/Page/HomePage/HomePage"
import AboutUs from "./component/Ui/Page/AboutUs/AboutUs"
import Layout from "./component/Partial/Layout"
import ContactUs from "./component/Ui/Page/ContactUs/ContactUs"
import ProductDetail from "./component/Ui/Page/ProductDetail/ProductDetail"
import MarketPlacePage from "./component/Ui/Page/MarketPlace/MarketPlacePage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/market"  element={<MarketPlacePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Product" element={<h1>ProductPage</h1>} />
        <Route path="/Product/1" element={<ProductDetail />} />
      </Routes >
    </Layout >
  )
}

export default App
