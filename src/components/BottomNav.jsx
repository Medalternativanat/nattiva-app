import { Link, useLocation } from "react-router-dom"

export default function BottomNav() {
  const location = useLocation()

  const items = [
    { nome: "Início", rota: "/" },
    { nome: "Água", rota: "/agua" },
    { nome: "Comunidade", rota: "/comunidade" },
    { nome: "Passos", rota: "/passos" },
    { nome: "Jogos", rota: "/jogos" },
  ]

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#fff",
        borderTop: "1px solid #eee",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
        zIndex: 1000,
      }}
    >
      {items.map((item) => {
        const ativo = location.pathname === item.rota

        return (
          <Link
            key={item.nome}
            to={item.rota}
            style={{
              textDecoration: "none",
              color: ativo ? "#2e7d32" : "#999",
              fontSize: 12,
              fontWeight: ativo ? "bold" : "normal",
            }}
          >
            {item.nome}
          </Link>
        )
      })}
    </div>
  )
}
