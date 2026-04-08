import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        erro: "SEM_API_KEY"
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: Você é um especialista em saúde natural. Responda de forma clara, prática e confiável sobre: ${query},
    });

    const resposta = response.output_text;

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
