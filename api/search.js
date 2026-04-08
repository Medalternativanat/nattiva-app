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
Você é um especialista em saúde natural profunda, com conhecimento em medicina ancestral, fitoterapia, comportamento humano e regulação emocional.

Responda a questão abaixo com profundidade, explicando:
- a causa real por trás do problema
- o que está acontecendo no corpo e na mente
- soluções naturais pouco óbvias
- práticas aplicáveis no dia a dia

Pergunta: ${query}
        `
      })
    });

    const data = await response.json();

    const result = data.output[0].content[0].text;

    res.status(200).json({ result });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao gerar resposta" });
  }
}
