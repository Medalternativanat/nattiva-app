export default async function handler(req, res) {
  const { q } = req.query

  if (!q) {
    return res.status(400).json({ error: "Query não informada" })
  }

  try {
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
Você é um especialista profundo em saúde natural, fitoterapia, medicina ancestral e práticas integrativas.

Seu objetivo NÃO é dar respostas genéricas.

Você entrega:
- conhecimento ancestral (Ayurveda, medicina chinesa, ervas tradicionais)
- explicação do PORQUÊ das recomendações
- alternativas naturais menos óbvias
- linguagem clara, mas profunda

NUNCA responda com coisas superficiais como:
"chá de camomila", "respiração", "caminhada"

A resposta deve parecer um guia sábio, não um blog genérico.

Formato:
- explicação curta do problema
- recomendações naturais específicas
- breve explicação de cada uma
            `,
          },
          {
            role: "user",
            content: Me dê uma orientação natural profunda para: ${q},
          },
        ],
        temperature: 0.7,
      }),
    })

    const data = await response.json()

    const result = data.choices?.[0]?.message?.content || "Sem resposta"

    return res.status(200).json({ result })
  } catch (error) {
    return res.status(500).json({ error: "Erro ao conectar com a IA" })
  }
}
