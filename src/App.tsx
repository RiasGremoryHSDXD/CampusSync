import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/index"
import LogIn from "./pages/auth/index"
import LostAndFound from "./pages/lost&found/index"
import Event from "./pages/event/index"
import Announcement from "./pages/announcement/index"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/lost&found" element={<LostAndFound/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/announcement" element={<Announcement/>}/>
      </Routes>
    </BrowserRouter>
  )
}
