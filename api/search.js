export default async function handler(req, res) {
  try {
    // 🔍 TESTE 1: ver se a key existe
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "API KEY NÃO EXISTE"
      });
    }

    // 🔍 TESTE 2: teste simples de fetch externo
    const test = await fetch("https://api.openai.com/v1/models", {
      headers: {
        "Authorization": Bearer ${process.env.OPENAI_API_KEY}
      }
    });

    const text = await test.text();

    return res.status(200).json({
      status: "TESTE OK",
      openai_response: text
    });

  } catch (error) {
    return res.status(500).json({
      error: "FETCH QUEBROU",
      detalhe: error.message
    });
  }
}
