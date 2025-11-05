import { Route, Routes } from "react-router"
import HomePage from "./component/Ui/Page/HomePage/HomePage"
import AboutUs from "./component/Ui/Page/AboutUs/AboutUs"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
  )
}

export default App
