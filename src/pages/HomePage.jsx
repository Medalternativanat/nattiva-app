import { useState } from "react"

export default function HomePage() {
  const [query, setQuery] = useState("")

  function handleSearch() {
    if (!query.trim()) return
    alert("Busca: " + query)
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f7f9f6" }}>
      
      <div style={{ width: "100%", maxWidth: 400, textAlign: "center", padding: 20 }}>
        
        <img
          src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_35LsRErkdpSKkn25Ksk8XrqUFMg/7b9420ff-7dd7-4e92-9ea4-42400cad68ae.png"
          alt="logo"
          style={{ width: 180, marginBottom: 10 }}
        />

        <p style={{ color: "#666", marginBottom: 20 }}>
          Saúde Natural & Sabedoria Ancestral
        </p>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="O que você quer cuidar hoje?"
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 25,
            border: "1px solid #eee",
            marginBottom: 10,
            textAlign: "center"
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 25,
            background: "#2e7d32",
            color: "#fff",
            border: "none"
          }}
        >
          Pesquisar
        </button>

      </div>

    </div>
  )
}
