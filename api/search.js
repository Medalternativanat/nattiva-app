export default async function handler(req, res) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ erro: "SEM_API_KEY" });
    }

    return res.status(200).json({
      step: "API_KEY_OK"
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
