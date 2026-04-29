import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
