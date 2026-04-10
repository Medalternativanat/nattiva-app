export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.openai.com/v1/models", {
      headers: {
        Authorization: Bearer ${process.env.OPENAI_API_KEY},
      },
    });

    const raw = await response.text();

    return res.status(200).json({
      etapa: "PASSO 4",
      status: response.status,
      resposta: raw
    });

  } catch (error) {
    return res.status(500).json({
      erro: error.message
    });
  }
}
