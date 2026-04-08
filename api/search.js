export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        erro: "API KEY não encontrada"
      });
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
          { role: "system", content: "Você é um especialista profundo em saúde natural." },
          { role: "user", content: query },
        ],
      }),
    });

    const text = await response.text(); // 👈 aqui muda tudo

    return res.status(200).json({
      status: response.status,
      raw: text
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message,
      stack: err.stack
    });
  }
}
