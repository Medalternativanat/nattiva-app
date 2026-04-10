import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("RAILWAY OK");
});

app.get("/api/test", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Rodando na porta " + PORT);
});
