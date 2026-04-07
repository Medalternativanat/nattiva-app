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
    <div className="w-full min-h-screen bg-[#f7f9f6] flex flex-col items-center px-5 pt-6 pb-24">

      {/* PERFIL */}
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={() => navigate("/perfil")}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
        >
          👤
        </button>
      </div>

      {/* LOGO + TEXTO */}
      <div className="flex flex-col items-center mt-4 mb-2">

        <img
          src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_35LsRErkdpSKkn25Ksk8XrqUFMg/7b9420ff-7dd7-4e92-9ea4-42400cad68ae.png"
          alt="Nattiva"
          className="w-[160px] md:w-[200px] object-contain"
        />

        <p className="text-[16px] font-semibold text-gray-700 text-center mt-1 leading-tight">
          Saúde Natural & Sabedoria Ancestral
        </p>

      </div>

      {/* BUSCA */}
      <div className="w-full max-w-md mt-6">

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="O que você quer cuidar hoje?"
          className="w-full px-4 py-4 rounded-full border border-gray-200 bg-white text-center text-[15px] shadow-sm focus:outline-none"
        />

        <button
          onClick={() => handleSearch(query)}
          className="w-full mt-4 py-4 rounded-full bg-green-700 text-white font-semibold text-[16px]"
        >
          Pesquisar
        </button>

      </div>

      {/* SUGESTÕES */}
      <div className="mt-8 w-full max-w-md text-center">

        <p className="text-[11px] text-gray-400 mb-3 tracking-wide">
          SUGESTÕES
        </p>

        <div className="flex flex-wrap justify-center gap-2">

          <button onClick={() => handleSearch("Ansiedade")} className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm">Ansiedade</button>
          <button onClick={() => handleSearch("Sono")} className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm">Sono</button>
          <button onClick={() => handleSearch("Imunidade")} className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm">Imunidade</button>
          <button onClick={() => handleSearch("Energia")} className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm">Energia</button>
          <button onClick={() => handleSearch("Dor de estômago")} className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm">Dor de estômago</button>
          <button onClick={() => handleSearch("Queda de cabelo")} className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm">Queda de cabelo</button>

        </div>
      </div>

    </div>
  );
}
