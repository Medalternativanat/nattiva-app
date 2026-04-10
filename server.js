import express from "express";
import https from "https";

const app = express();

app.get("/api/test", async (req, res) => {
  try {
    const options = {
      hostname: "api.openai.com",
      path: "/v1/models",
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    };

    const request = https.request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        res.status(200).json({
          status: "OK",
          resposta: JSON.parse(data),
        });
      });
    });

    request.on("error", (error) => {
      res.status(500).json({
        erro: error.message,
      });
    });

    request.end();
  } catch (error) {
    res.status(500).json({
      erro: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
