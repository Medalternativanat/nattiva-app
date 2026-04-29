const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API funcionando" });
});

// ⚠️ AQUI É O PONTO CRÍTICO
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor rodando na porta " + PORT);
});
