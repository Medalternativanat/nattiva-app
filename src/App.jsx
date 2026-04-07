import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import SobrePage from "./pages/SobrePage.jsx"
import BottomNav from "./components/BottomNav"

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, paddingBottom: 80 }}>
        <h1>Nattiva App</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/sobre">Sobre</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
