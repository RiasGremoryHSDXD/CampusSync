import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import Home from "./pages/home/index"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
