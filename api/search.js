import https from "https";

export default async function handler(req, res) {
  try {
    const options = {
      hostname: "api.openai.com",
      path: "/v1/models",
      method: "GET",
      headers: {
        Authorization: Bearer ${process.env.OPENAI_API_KEY},
      },
    };

    const request = https.request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        return res.status(200).json({
          status: "HTTPS OK",
          resposta: data,
        });
      });
    });

    request.on("error", (error) => {
      return res.status(500).json({
        erro: "HTTPS falhou",
        detalhe: error.message,
      });
    });

    request.end();

  } catch (error) {
    return res.status(500).json({
      erro: "Erro geral",
      detalhe: error.message,
    });
  }
}
