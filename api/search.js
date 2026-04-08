import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: Explique de forma simples: ${query}
    });

    const texto =
      response.output?.[0]?.content?.[0]?.text ||
      "Sem resposta";

    return res.status(200).json({
      ok: true,
      resposta: texto
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
