import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"

export default function ResultPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get("q")

  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(/api/search?q=${query})
        const data = await res.json()
        setResult(data.result)
      } catch (error) {
        setResult("Erro ao buscar resposta.")
      } finally {
        setLoading(false)
      }
    }

    if (query) {
      fetchData()
    }
  }, [query])

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate(-1)}>← Voltar</button>

      <h2 style={{ marginTop: 20 }}>
        Resultado para: {query}
      </h2>

      <div
        style={{
          marginTop: 20,
          padding: 20,
          background: "#f5f5f5",
          borderRadius: 10
        }}
      >
        {loading ? "Carregando..." : result}
      </div>
    </div>
  )
}
