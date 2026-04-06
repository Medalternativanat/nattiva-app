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

  return (
    <div>
      <form onSubmit={buscar}>
        <input
          type="text"
          placeholder="Buscar remédio natural..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: 10, width: 300 }}
        />

        {/* 👇 BOTÃO IMPORTANTE */}
        <button type="submit" style={{ marginLeft: 10 }}>
          Buscar
        </button>
      </form>

      {resposta && (
        <div style={{ marginTop: 20 }}>
          <strong>Resultado:</strong>
          <p>{resposta}</p>
        </div>
      )}
    </div>
  )
}
