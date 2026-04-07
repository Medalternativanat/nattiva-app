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
    <div style={styles.page}>
      <div style={styles.centerBlock}>

        {/* LOGO */}
        <img
          src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_35LsRErkdpSKkn25Ksk8XrqUFMg/7b9420ff-7dd7-4e92-9ea4-42400cad68ae.png"
          alt="Nattiva"
          style={styles.logo}
        />

        {/* FRASE */}
        <p style={styles.subtitle}>
          Saúde Natural & Sabedoria Ancestral
        </p>

        {/* BUSCA */}
        <input
          type="text"
          placeholder="O que você quer cuidar hoje?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />

        {/* BOTÃO */}
        <button
          onClick={() => handleSearch(query)}
          style={styles.button}
        >
          Pesquisar
        </button>

        {/* SUGESTÕES */}
        <div style={styles.suggestions}>
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
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f7f9f6",
  },

  centerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px", // 🔥 diminui espaçamento geral
    width: "100%",
    maxWidth: "420px",
    padding: "20px",
  },

  logo: {
    width: "270px", // 🔥 maior (mais presença)
    marginBottom: "5px", // 🔥 aproxima da frase
  },

  subtitle: {
    fontSize: "16px",
    color: "#555",
    fontWeight: "600", // 🔥 mais forte
    marginBottom: "15px", // 🔥 aproxima da busca
  },

  input: {
    width: "100%",
    padding: "16px",
    borderRadius: "30px",
    border: "1px solid #ddd",
    textAlign: "center",
    fontSize: "15px",
  },

  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    background: "#2e7d32",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  },

  suggestions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },

  chip: {
    padding: "8px 14px",
    borderRadius: "20px",
    border: "none",
    background: "#e8f5e9",
    fontSize: "13px",
    cursor: "pointer",
  },
}
