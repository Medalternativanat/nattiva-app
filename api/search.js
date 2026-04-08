export default function handler(req, res) {
  try {
    const { q } = req.query

    // 🔒 proteção contra undefined
    if (!q || typeof q !== "string") {
      return res.status(400).json({
        result: "Busca inválida"
      })
    }

    const query = q.toLowerCase()

    let result = "Ainda não temos conteúdo para: " + q

    if (query.includes("ansiedade")) {
      result = "Chá de camomila | Respiração | Caminhada"
    }

    if (query.includes("estomago")) {
      result = "Chá de hortelã | Gengibre | Evitar fritura"
    }

    if (query.includes("ferida")) {
      result = "Babosa | Calêndula | Higienização adequada"
    }

    if (query.includes("camomila")) {
      result = "Calmante natural | Ajuda no sono | Reduz ansiedade"
    }

    return res.status(200).json({ result })

  } catch (error) {
    console.error("ERRO NA API:", error)

    return res.status(500).json({
      result: "Erro interno do servidor"
    })
  }
}
