export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Sem busca" });
  }

  const prompt = `
Você é um especialista em saúde natural, sabedoria ancestral e medicina tradicional.

Responda de forma prática, clara e confiável.

Para o problema: "${q}"

Forneça:

1. Chás recomendados (com preparo simples)
2. Alimentos que ajudam
3. Práticas naturais
4. Cuidados importantes

IMPORTANTE:
- Priorize conhecimento ancestral (ervas, raízes, práticas naturais)
- Evite linguagem médica complexa
- Seja direto e útil
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": Bearer ${process.env.OPENAI_API_KEY}
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();

    const text = data.choices[0].message.content;

    res.status(200).json({ result: text });

  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar resposta" });
  }
}
