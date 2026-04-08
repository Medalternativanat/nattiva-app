export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${process.env.OPENAI_API_KEY},
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: Explique de forma simples: ${query}
          }
        ]
      }),
    });

    const data = await response.json();

    return res.status(200).json({
      resposta: data.choices?.[0]?.message?.content || "sem resposta"
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
