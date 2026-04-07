export default function handler(req, res) {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({
        result: "Nenhuma busca informada."
      });
    }

    const respostas = {
      ansiedade: "🌿 Chá de camomila\n🧘 Respiração profunda\n🚶 Caminhada ao ar livre",
      "dor de estomago": "🌿 Chá de hortelã\n🔥 Compressa morna\n🍽️ Evitar gordura"
    };

    const chave = q.toLowerCase();

    const resultado =
      respostas[chave] ||
      🌿 Ainda estamos aprendendo sobre "${q}";

    return res.status(200).json({
      result: resultado
    });

  } catch (error) {
    return res.status(500).json({
      result: "Erro interno na API",
      error: error.message
    });
  }
}
