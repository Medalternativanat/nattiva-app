import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  return (
    <div style={{
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto"
    }}>

      {/* VOLTAR */}
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

      {/* PERGUNTA */}
      <h2 style={{
        fontSize: "20px",
        marginBottom: "20px"
      }}>
        Resultado para: <strong>{query}</strong>
      </h2>

      {/* RESPOSTA SIMPLES (TEMPORÁRIA) */}
      <div style={{
        background: "#f1f8f4",
        padding: "20px",
        borderRadius: "16px",
        lineHeight: "1.6"
      }}>
        <p>
          Aqui vão aparecer recomendações naturais para <strong>{query}</strong>.
        </p>

        <p>
          Em breve, você verá sugestões como:
        </p>

        <ul>
          <li>🌿 Chás recomendados</li>
          <li>🥗 Alimentos que ajudam</li>
          <li>🧘 Práticas naturais</li>
          <li>⚠️ Cuidados importantes</li>
        </ul>
      </div>

    </div>
  );
}
