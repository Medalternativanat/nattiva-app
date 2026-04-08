export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    // PASSO 1 — validar env
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ erro: "SEM_API_KEY" });
    }

    // PASSO 2 — teste simples SEM OpenAI
    return res.status(200).json({
      status: "API OK",
      query,
      key_existe: true
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
