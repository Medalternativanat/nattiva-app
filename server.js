import express from "express";

const app = express();

// ⚠️ ESSA LINHA É A MAIS IMPORTANTE
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
