export default async function handler(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Query vazia" });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${process.env.OPENAI_API_KEY},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: Responda de forma simples e natural sobre: ${q}
      })
    });

    // 👇 ISSO É O PONTO CRÍTICO
    const rawText = await response.text();

    // 👇 TENTA PARSEAR
    let data;
    try {
      data = JSON.parse(rawText);
    } catch (e) {
      return res.status(200).json({
        erro: "Resposta não é JSON",
        raw: rawText
      });
    }

    // 👇 SE OPENAI DER ERRO, VOCÊ VAI VER
    if (!response.ok) {
      return res.status(200).json({
        erro_openai: true,
        status: response.status,
        data: data
      });
    }

    // 👇 EXTRAÇÃO SEGURA (NÃO QUEBRA)
    const texto =
      data?.output?.[0]?.content?.[0]?.text ||
      "Sem resposta da IA";

    return res.status(200).json({
      ok: true,
      resposta: texto
    });

  } catch (err) {
    return res.status(200).json({
      erro_servidor: true,
      mensagem: err.message
    });
  }
}
