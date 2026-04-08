import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    console.log("API KEY EXISTE?", !!process.env.OPENAI_API_KEY);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: Explique de forma simples: ${query}
    });

    console.log("RESPOSTA OPENAI:", JSON.stringify(response));

    return res.status(200).json({
      ok: true,
      resposta: response
    });

  } catch (err) {
    console.error("ERRO COMPLETO:", err);

    return res.status(500).json({
      erro_real: err.message,
      stack: err.stack
    });
  }
}
