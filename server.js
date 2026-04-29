import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API funcionando" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
