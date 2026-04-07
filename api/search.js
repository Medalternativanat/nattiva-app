export default function handler(req, res) {
  const q = req.query.q;

  if (!q) {
    res.status(400).json({ result: "Nenhuma busca informada." });
    return;
  }

  const respostas = {
    ansiedade: "🌿 Chá de camomila\n🧘 Respiração\n🚶 Caminhada",
    "dor de estomago": "🌿 Chá de hortelã\n🔥 Compressa\n🍽️ Evitar gordura"
  };

  const chave = q.toLowerCase();

  const resultado =
    respostas[chave] ||
    🌿 Ainda não temos conteúdo para "${q}";

  res.status(200).json({ result: resultado });
}
