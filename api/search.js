export default async function handler(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Query vazia" });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "API KEY NÃO ENCONTRADA"
      });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${apiKey},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: Responda de forma simples e natural sobre: ${q}
      })
    });

    const data = await response.json();

    // 👇 se OpenAI devolver erro, mostra tudo
    if (!response.ok) {
      return res.status(500).json({
        error: "ERRO OPENAI",
        status: response.status,
        detalhe: data
      });
    }

    const texto =
      data?.output?.[0]?.content?.[0]?.text ||
      "Sem resposta da IA";

    return res.status(200).json({
      query: q,
      resposta: texto
    });

  } catch (error) {
    return res.status(500).json({
      error: "ERRO GERAL",
      detalhe: error.message
    });
  }
}
