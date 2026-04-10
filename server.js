import express from "express";
import https from "https";

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

app.get("/api", (req, res) => {
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
      res.json({ status: "OK", data });
    });
  });

  request.on("error", (error) => {
    res.status(500).json({ erro: error.message });
  });

  request.end();
});

const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor rodando na porta " + PORT);
});
