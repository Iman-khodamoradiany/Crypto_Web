import { Route, Routes } from "react-router"
import HomePage from "./component/Ui/Page/HomePage/HomePage"
import AboutUs from "./component/Ui/Page/AboutUs/AboutUs"
import Layout from "./component/Partial/Layout"
import ContactUs from "./component/Ui/Page/ContactUs/ContactUs"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact"  element={<ContactUs />} />
      </Routes>
    </Layout>
  )
}

export default App
