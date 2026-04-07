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
        const res = await fetch(https://nattiva-app.vercel.app/api/search?q=${query})
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
    <div style={{ padding: "40px" }}>
      <button onClick={() => navigate("/")}>← Voltar</button>

      <h1>Resultado para: {query}</h1>

      {loading ? <p>Carregando...</p> : <p>{result}</p>}
    </div>
  )
}
