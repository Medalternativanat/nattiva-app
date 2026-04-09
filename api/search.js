import https from "https";

export default async function handler(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Query vazia" });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "API KEY NÃO ENCONTRADA"
      });
    }

    const data = JSON.stringify({
      model: "gpt-4.1-mini",
      input: Responda de forma simples e natural sobre: ${q}
    });

    const options = {
      hostname: "api.openai.com",
      path: "/v1/responses",
      method: "POST",
      headers: {
        "Authorization": Bearer ${apiKey},
        "Content-Type": "application/json",
        "Content-Length": data.length
      }
    };

    const request = https.request(options, (response) => {
      let body = "";

      response.on("data", (chunk) => {
        body += chunk;
      });

      response.on("end", () => {
        try {
          const json = JSON.parse(body);

          if (response.statusCode !== 200) {
            return res.status(500).json({
              error: "ERRO OPENAI",
              detalhe: json
            });
          }

          const texto =
            json?.output?.[0]?.content?.[0]?.text ||
            "Sem resposta da IA";

          return res.status(200).json({
            query: q,
            resposta: texto
          });

        } catch (e) {
          return res.status(500).json({
            error: "ERRO PARSE",
            detalhe: body
          });
        }
      });
    });

    request.on("error", (error) => {
      return res.status(500).json({
        error: "ERRO REQUEST",
        detalhe: error.message
      });
    });

    request.write(data);
    request.end();

  } catch (error) {
    return res.status(500).json({
      error: "ERRO GERAL",
      detalhe: error.message
    });
  }
}
