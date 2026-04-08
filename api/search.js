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
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: Me explique de forma simples sobre: ${query}
    });

    const texto =
      response.output?.[0]?.content?.[0]?.text ||
      "Sem resposta da IA";

    return res.status(200).json({
      status: "API OK",
      resposta: texto
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
