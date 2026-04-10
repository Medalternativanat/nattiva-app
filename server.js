import express from "express";

const app = express();

app.get("/api/test", async (req, res) => {
  res.json({
    status: "SERVIDOR OK",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
