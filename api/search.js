export default function handler(req, res) {
  const q = req.query.q;

  if (!q) {
    res.status(400).json({ result: "Nenhuma busca informada." });
    return;
  }

  const respostas = {
    ansiedade: "Cha de camomila | Respiracao | Caminhada",
    "dor de estomago": "Cha de hortela | Compressa | Evitar gordura"
  };

  const chave = q.toLowerCase();

  const resultado =
    respostas[chave] ||
    Ainda nao temos conteudo para "${q}";

  res.status(200).json({ result: resultado });
}
