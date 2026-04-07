export default function handler(req, res) {
  const q = req.query.q

  if (!q) {
    return res.status(400).json({ result: "Nenhuma busca informada." })
  }

  const chave = q.toLowerCase()

  const respostas = {
    "ansiedade": "🌿 Chá de camomila | 🧘 Respiração profunda | 🚶 Caminhada ao ar livre",

    "chá de camomila": "🌼 Calmante natural poderoso\n🍵 Tomar antes de dormir\n🧠 Ajuda na ansiedade e sono",

    "dor de estomago": "🌿 Chá de hortelã | 🔥 Compressa morna | ⚠️ Evitar gordura",

    "dor de barriga": "🌿 Chá de erva-doce | 🥣 Alimentação leve | 🚫 Evitar leite",

    "insônia": "🌙 Chá de camomila | 📵 Sem celular à noite | 🛏️ Ambiente escuro",

    "ferida": "🌿 Barbatimão (lavagem) | 🧂 Água com sal | ☀️ Manter limpo e seco"
  }

  const resultado =
    respostas[chave] ||
    🌿 Ainda não temos conteúdo para: ${q}

  res.status(200).json({ result: resultado })
}
