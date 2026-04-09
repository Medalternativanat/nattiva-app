export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.openai.com/v1/models", {
      headers: {
        Authorization: Bearer ${process.env.OPENAI_API_KEY},
      },
    });

    const text = await response.text();

    return res.status(200).json({
      status: "fetch ok",
      resposta: text
    });

  } catch (error) {
    return res.status(500).json({
      erro: "fetch falhou",
      detalhe: error.message
    });
  }
}
