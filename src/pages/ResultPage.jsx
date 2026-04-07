import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState("Carregando...");

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(/api/search?q=${query});
        const data = await res.json();
        setResult(data.result);
      } catch (error) {
        setResult("Erro ao buscar resposta.");
      }
    }

    if (query) fetchData();
  }, [query]);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate(-1)}>← Voltar</button>

      <h2>Resultado para: {query}</h2>

      <div style={{
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        background: "#f5f5f5"
      }}>
        {result}
      </div>
    </div>
  );
}
