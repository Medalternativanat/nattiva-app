export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        erro: "SEM_API_KEY"
      });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${process.env.OPENAI_API_KEY},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: Explique de forma simples: ${query}
      })
    });

    const data = await response.json();

    return res.status(200).json({
      ok: true,
      resposta: data
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
