import { useState } from "react"

export default function HomePage() {
  const [query, setQuery] = useState("")
  const [resposta, setResposta] = useState("")

  async function buscar(e) {
    e.preventDefault()

    const res = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })

    const data = await res.json()
    setResposta(data.resposta)
  }

  const sugestoes = [
    "Ansiedade",
    "Sono",
    "Imunidade",
    "Energia",
    "Dor de estômago",
    "Queda de cabelo"
  ]

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f7f9f6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 20
    }}>

      {/* LOGO */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_35LsRErkdpSKkn25Ksk8XrqUFMg/7b9420ff-7dd7-4e92-9ea4-42400cad68ae.png"
          alt="Nattiva"
          style={{ width: 160 }}
        />

        <p style={{ marginTop: 10, color: "#666" }}>
          Saúde Natural & Sabedoria Ancestral
        </p>
      </div>

      {/* BUSCA */}
      <form onSubmit={buscar} style={{ width: "100%", maxWidth: 400, marginTop: 30 }}>
        <input
          type="text"
          placeholder="O que você quer cuidar hoje?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 20,
            border: "1px solid #ddd",
            marginBottom: 10
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 20,
            background: "#2e7d32",
            color: "white",
            border: "none",
            fontWeight: "bold"
          }}
        >
          Pesquisar
        </button>
      </form>

      {/* SUGESTÕES */}
      <div style={{ marginTop: 30, textAlign: "center" }}>
        <p style={{ color: "#888", fontSize: 12 }}>SUGESTÕES</p>

        <div style={{ marginTop: 10 }}>
          {sugestoes.map((s) => (
            <button
              key={s}
              onClick={() => setQuery(s)}
              style={{
                margin: 5,
                padding: "8px 14px",
                borderRadius: 20,
                border: "none",
                background: "#e8f5e9",
                cursor: "pointer"
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTADO */}
      {resposta && (
        <div style={{ marginTop: 30, maxWidth: 400 }}>
          <strong>Resultado:</strong>
          <p style={{ whiteSpace: "pre-line" }}>{resposta}</p>
        </div>
      )}
    </div>
  )
}
