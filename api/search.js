export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ erro: "SEM_API_KEY" });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${process.env.OPENAI_API_KEY},
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: Você é um especialista em saúde natural. Responda de forma clara e confiável: ${query}
      }),
    });

    const data = await response.json();

    // 🔍 segurança contra erro da API
    if (!data.output) {
      return res.status(500).json({
        erro_openai: data
      });
    }

    const resposta = data.output[0].content[0].text;

    return res.status(200).json({
      sucesso: true,
      pergunta: query,
      resposta
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
