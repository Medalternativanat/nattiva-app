import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("NATTIVA BACKEND ONLINE");
});

app.get("/search", async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({ error: "Query vazia" });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": Bearer ${process.env.OPENAI_API_KEY},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: Responda de forma humana, acolhedora e natural sobre: ${q}
      })
    });

    const data = await response.json();

    const texto =
      data?.output?.[0]?.content?.[0]?.text ||
      "Sem resposta da IA";

    return res.json({ resposta: texto });

  } catch (error) {
    return res.status(500).json({ erro: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
