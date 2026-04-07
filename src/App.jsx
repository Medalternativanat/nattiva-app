import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import SobrePage from "./pages/SobrePage.jsx"
import BottomNav from "./components/BottomNav"

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ paddingBottom: 80 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
