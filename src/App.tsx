import { BrowserRouter, Route, Routes, } from "react-router-dom"
import DHPLoginPage from "./pages/Login"
import DHPRegisterPage from "./pages/Register"
import DigitalHeritagePlatform from "./comps/Navbar"
import DHPHeroSection from "./pages/AboutUs"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DigitalHeritagePlatform/>}/>
      <Route path="/about" element={<DHPHeroSection/>}/>
      <Route path="/login" element={<DHPLoginPage/>}/>
      <Route path="/register" element={<DHPRegisterPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
