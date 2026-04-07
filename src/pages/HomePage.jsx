import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSearch(q) {
    if (!q || !q.trim()) return;
    navigate("/resultado?q=" + encodeURIComponent(q));
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#f7f9f6",
      textAlign: "center",
      padding: "20px"
    }}>

      {/* LOGO */}
      <img
        src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_35LsRErkdpSKkn25Ksk8XrqUFMg/7b9420ff-7dd7-4e92-9ea4-42400cad68ae.png"
        alt="Nattiva"
        style={{
          width: "180px",
          marginBottom: "10px"
        }}
      />

      {/* TEXTO */}
      <p style={{
        fontSize: "16px",
        fontWeight: "600",
        color: "#444",
        marginBottom: "25px"
      }}>
        Saúde Natural & Sabedoria Ancestral
      </p>

      {/* INPUT */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="O que você quer cuidar hoje?"
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "14px",
          borderRadius: "30px",
          border: "1px solid #ddd",
          textAlign: "center",
          marginBottom: "15px"
        }}
      />

      {/* BOTÃO */}
      <button
        onClick={() => handleSearch(query)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "14px",
          borderRadius: "30px",
          border: "none",
          background: "#2e7d32",
          color: "#fff",
          fontWeight: "600",
          cursor: "pointer"
        }}
      >
        Pesquisar
      </button>

      {/* SUGESTÕES */}
      <div style={{ marginTop: "25px" }}>
        <p style={{
          fontSize: "12px",
          color: "#888",
          marginBottom: "10px"
        }}>
          SUGESTÕES
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px"
        }}>
          {["Ansiedade","Sono","Imunidade","Energia","Dor de estômago","Queda de cabelo"].map((item) => (
            <button
              key={item}
              onClick={() => handleSearch(item)}
              style={{
                padding: "8px 12px",
                borderRadius: "20px",
                border: "none",
                background: "#e8f5e9",
                cursor: "pointer"
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
