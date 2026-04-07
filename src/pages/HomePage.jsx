import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  function handleSearch(q) {
    if (!q || q.trim() === "") return
    const url = "/resultado?q=" + encodeURIComponent(q)
    navigate(url)
  }

  return (
    <div style={styles.container}>

      {/* LOGO */}
      <img
        src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_35LsRErkdpSKkn25Ksk8XrqUFMg/7b9420ff-7dd7-4e92-9ea4-42400cad68ae.png"
        alt="Nattiva"
        style={styles.logo}
      />

      {/* TEXTO */}
      <p style={styles.subtitle}>
        Saúde Natural & Sabedoria Ancestral
      </p>

      {/* BUSCA */}
      <div style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="O que você quer cuidar hoje?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={() => handleSearch(query)}
          style={styles.button}
        >
          Pesquisar
        </button>
      </div>

      {/* SUGESTÕES */}
      <div style={styles.suggestions}>
        <p style={styles.suggestionsTitle}>SUGESTÕES</p>

        <div style={styles.chips}>
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
              onClick={() => handleSearch(item)}
              style={styles.chip}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f9f6",
    padding: "20px",
    textAlign: "center"
  },

  logo: {
    width: "180px", // 🔥 maior (corrigido)
    marginBottom: "25px"
  },

  subtitle: {
    fontSize: "16px", // 🔥 maior
    color: "#555",
    marginBottom: "30px",
    fontWeight: "500"
  },

  searchWrapper: {
    width: "100%",
    maxWidth: "420px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center" // 🔥 GARANTE CENTRALIZAÇÃO
  },

  input: {
    width: "100%",
    padding: "16px",
    borderRadius: "30px",
    border: "1px solid #ddd",
    marginBottom: "12px",
    fontSize: "15px",
    textAlign: "center",
    boxSizing: "border-box"
  },

  button: {
    width: "100%", // 🔥 agora casa perfeitamente com input
    padding: "16px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#2e7d32",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer"
  },

  suggestions: {
    marginTop: "35px"
  },

  suggestionsTitle: {
    fontSize: "12px",
    color: "#888",
    marginBottom: "12px",
    letterSpacing: "1px"
  },

  chips: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    maxWidth: "420px"
  },

  chip: {
    padding: "9px 16px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#e8f5e9",
    fontSize: "14px",
    cursor: "pointer"
  }
}
