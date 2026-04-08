export default async function handler(req, res) {
  try {
    const query = req.query.q || "ansiedade";

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        erro: "SEM_API_KEY"
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${process.env.OPENAI_API_KEY},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Você é um especialista em saúde natural e medicina alternativa. Responda de forma clara, objetiva e confiável."
          },
          {
            role: "user",
            content: query
          }
        ]
      })
    });

    const data = await response.json();

    return res.status(200).json({
      resposta: data.choices?.[0]?.message?.content || "Sem resposta"
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
