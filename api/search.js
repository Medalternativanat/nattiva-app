export default async function handler(req, res) {
  const query = req.query.q;

  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "API KEY não encontrada no ambiente" });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: Bearer ${process.env.OPENAI_API_KEY},
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Especialista em saúde natural profunda." },
          { role: "user", content: query },
        ],
      }),
    });

    const data = await response.json();

    // 🔥 MOSTRA TUDO NA TELA (CHAVE DO DEBUG)
    return res.status(200).json({
      status_http: response.status,
      resposta_openai: data
    });

  } catch (error) {
    return res.status(500).json({
      erro_real: error.message
    });
  }
}
