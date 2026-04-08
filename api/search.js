export default async function handler(req, res) {
  const query = req.query.q;

  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "API KEY não encontrada" });
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
          {
            role: "system",
            content: "Você é um especialista em saúde natural profunda e ancestral.",
          },
          {
            role: "user",
            content: query,
          },
        ],
      }),
    });

    const data = await response.json();

    // 👇 ESSA LINHA VAI TE MOSTRAR O ERRO REAL
    console.log("RESPOSTA OPENAI:", data);

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const result = data.choices?.[0]?.message?.content;

    res.status(200).json({ result });

  } catch (error) {
    console.error("ERRO GERAL:", error);
    res.status(500).json({ error: "Erro geral" });
  }
}
