export default async function handler(req, res) {
  try {
    const query = req.query.q || "teste";

    // 🔍 DEBUG DA API KEY
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        erro: "SEM_API_KEY"
      });
    }

    // 🔍 TESTE SEM OPENAI
    return res.status(200).json({
      funcionando: true,
      query,
      tem_api_key: true
    });

  } catch (err) {
    return res.status(500).json({
      erro_real: err.message
    });
  }
}
