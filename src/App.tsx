import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import ContactUs from "./pages/ContactUs"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <div className="relative h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <div className="pt-35">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
