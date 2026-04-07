export default function handler(req, res) {
  const q = req.query.q;

  if (!q) {
    return res.status(400).json({ result: "Nenhuma busca informada." });
  }

  const respostas = {
    ansiedade: "Cha de camomila | Respiracao | Caminhada",
    dor: "Cha de hortela | Compressa | Evitar gordura"
  };

  const chave = q.toLowerCase();

  let resultado = respostas[chave];

  if (!resultado) {
    resultado = "Ainda nao temos conteudo para: " + q;
  }

  return res.status(200).json({ result: resultado });
}
