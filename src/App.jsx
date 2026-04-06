import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home() {
  return <h2>Home</h2>
}

function Sobre() {
  return <h2>Sobre</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>Nattiva App</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/sobre">Sobre</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
