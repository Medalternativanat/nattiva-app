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
            content: `
Você é um especialista em saúde natural profunda, medicina ancestral e comportamento humano.

Explique com profundidade:
- causa real do problema
- o que acontece no corpo
- soluções naturais pouco óbvias
            `,
          },
          {
            role: "user",
            content: query,
          },
        ],
      }),
    });

    const data = await response.json();

    // LOG PRA DEBUG (importante)
    console.log("OPENAI RESPONSE:", JSON.stringify(data));

    const result =
      data.choices?.[0]?.message?.content ||
      "Não foi possível gerar resposta.";

    res.status(200).json({ result });
  } catch (error) {
    console.error("ERRO REAL:", error);
    res.status(500).json({ error: "Erro ao gerar resposta" });
  }
}
