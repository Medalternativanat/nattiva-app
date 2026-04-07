import { useState } from "react"

export default function HomePage() {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (!query.trim()) return
    window.location.href = "/?q=" + encodeURIComponent(query)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f7f9f6"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          padding: 20
        }}
      >
        {/* LOGO */}
        <img
          src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_35LsRErkdpSKkn25Ksk8XrqUFMg/7b9420ff-7dd7-4e92-9ea4-42400cad68ae.png"
          alt="Nattiva"
          style={{
            width: 180,
            marginBottom: 10
          }}
        />

        {/* TEXTO */}
        <p
          style={{
            color: "#666",
            marginBottom: 20,
            textAlign: "center"
          }}
        >
          Saúde Natural & Sabedoria Ancestral
        </p>

        {/* BUSCA */}
        <input
          type="text"
          placeholder="O que você quer cuidar hoje?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 25,
            border: "1px solid #eee",
            marginBottom: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            fontSize: 16,
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
            fontWeight: "bold",
            border: "none",
            fontSize: 16,
            marginBottom: 25
          }}
        >
          Pesquisar
        </button>

        {/* SUGESTÕES */}
        <p style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
          SUGESTÕES
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center"
          }}
        >
          {[
            "Ansiedade",
            "Sono",
            "Imunidade",
            "Energia",
            "Dor de estômago",
            "Queda de cabelo"
          ].map((item) => (
            <button
              key={item}
              onClick={() => setQuery(item)}
              style={{
                padding: "10px 16px",
                borderRadius: 25,
                border: "none",
                background: "#e8f5e9",
                color: "#2e7d32",
                fontSize: 14,
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              {item}
            </
