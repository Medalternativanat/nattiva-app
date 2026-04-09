export default async function handler(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Query vazia" });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${process.env.OPENAI_API_KEY},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: Responda de forma simples e natural sobre: ${q}
      })
    });

    const data = await response.json();

    const texto =
      data.output?.[0]?.content?.[0]?.text ||
      "Sem resposta da IA";

    return res.status(200).json({
      query: q,
      resposta: texto
    });

  } catch (error) {
    console.error("ERRO:", error);
    return res.status(500).json({
      error: "Erro interno",
      detalhe: error.message
    });
  }
}
