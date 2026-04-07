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
          width: "220px",
          marginBottom: "8px"
        }}
      />

      {/* TEXTO */}
      <p style={{
        fontSize: "17px",
        fontWeight: "600",
        color: "#444",
        marginBottom: "28px"
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
          maxWidth: "420px",
          padding: "15px",
          borderRadius: "30px",
          border: "1px solid #ddd",
          textAlign: "center",
          marginBottom: "15px",
          fontSize: "15px"
        }}
      />

      {/* BOTÃO */}
      <button
        onClick={() => handleSearch(query)}
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "15px",
          borderRadius: "30px",
          border: "none",
          background: "#2e7d32",
          color: "#fff",
          fontWeight: "600",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Pesquisar
      </button>

      {/* SUGESTÕES */}
      <div style={{ marginTop: "35px" }}>

        <p style={{
          fontSize: "13px",
          fontWeight: "700",
          color: "#666",
          marginBottom: "16px",
          letterSpacing: "1px"
        }}>
          SUGESTÕES
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px"
        }}>
          <button onClick={() => handleSearch("Ansiedade")} style={chip}>Ansiedade</button>
          <button onClick={() => handleSearch("Sono")} style={chip}>Sono</button>
          <button onClick={() => handleSearch("Imunidade")} style={chip}>Imunidade</button>
          <button onClick={() => handleSearch("Energia")} style={chip}>Energia</button>
          <button onClick={() => handleSearch("Dor de estômago")} style={chip}>Dor de estômago</button>
          <button onClick={() => handleSearch("Queda de cabelo")} style={chip}>Queda de cabelo</button>
        </div>

      </div>

    </div>
  );
}

const chip = {
  padding: "8px 14px",
  borderRadius: "20px",
  border: "none",
  background: "#e8f5e9",
  fontSize: "14px",
  cursor: "pointer"
};
