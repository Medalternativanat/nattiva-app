import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/search?q=" + query);
        const data = await res.json();
        setResult(data.result);
      } catch (err) {
        setResult("Erro ao buscar resposta.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  return (
    <div style={{
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto"
    }}>

      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px",
          background: "none",
          border: "none",
          color: "#2e7d32",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        ← Voltar
      </button>

      <h2 style={{
        fontSize: "20px",
        marginBottom: "20px"
      }}>
        Resultado para: <strong>{query}</strong>
      </h2>

      <div style={{
        background: "#f1f8f4",
        padding: "20px",
        borderRadius: "16px",
        lineHeight: "1.6",
        whiteSpace: "pre-line"
      }}>
        {loading ? "Buscando sabedoria ancestral..." : result}
      </div>

    </div>
  );
}
