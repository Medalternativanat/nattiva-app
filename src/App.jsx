import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import HomePage from "./pages/HomePage.jsx"
import SobrePage from "./pages/SobrePage.jsx"

export default function App() {
  const [busca, setBusca] = useState("")

  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>Nattiva App</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/sobre">Sobre</Link>
        </nav>

        {/* 🔍 CAMPO DE BUSCA */}
        <input
          type="text"
          placeholder="Buscar remédio natural..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            padding: 10,
            width: 300,
            marginBottom: 20,
            borderRadius: 8,
            border: "1px solid #ccc"
          }}
        />

        {/* 👇 só pra você ver funcionando */}
        {busca && (
          <p>Você buscou: <strong>{busca}</strong></p>
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
