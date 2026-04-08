export default async function handler(req, res) {
  const query = req.query.q;

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": Bearer ${process.env.OPENAI_API_KEY}
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        input: `
Você é um especialista em saúde natural profunda, com conhecimento em medicina ancestral, fitoterapia e comportamento humano.

Explique com profundidade:
- causa real do problema
- o que acontece no corpo
- soluções naturais pouco óbvias

Pergunta: ${query}
        `
      })
    });

    const data = await response.json();

    // 🔥 PEGADA SEGURA (NUNCA QUEBRA)
    const result =
      data.output?.[0]?.content?.[0]?.text ||
      data.output_text ||
      "Não foi possível gerar resposta.";

    res.status(200).json({ result });

  } catch (error) {
    console.error("ERRO REAL:", error);
    res.status(500).json({ error: "Erro ao gerar resposta" });
  }
}
