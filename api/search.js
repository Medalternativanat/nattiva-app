export default async function handler(req, res) {
  const { query } = req.body

  if (!query) {
    return res.status(400).json({ erro: "Query vazia" })
  }

  const q = query.toLowerCase()

  let resposta = ""

  if (q.includes("ansiedade")) {
    resposta = `
🧠 POSSÍVEIS CAUSAS:
- Estresse crônico
- Excesso de estímulos (celular, trabalho)
- Falta de magnésio
- Desequilíbrio do sono

🌿 PROTOCOLO NATURAL:
- Chá de camomila (calmante leve)
- Valeriana (ajuda no sono)
- Lavanda (relaxante natural)

🍵 RECEITA:
Chá calmante:
- 1 colher de camomila
- 1 colher de erva-doce
- 200ml de água quente
Deixar 10 min e tomar à noite

⚠️ CONTRAINDICAÇÕES:
- Valeriana pode causar sonolência forte
- Evitar misturar com álcool
- Gestantes devem consultar médico

💡 DICA EXTRA:
Respiração 4-4-4 (inspirar 4s, segurar 4s, soltar 4s)
`
  }

  else if (q.includes("gases") || q.includes("inchaço")) {
    resposta = `
🧠 POSSÍVEIS CAUSAS:
- Má digestão
- Excesso de açúcar
- Intolerância alimentar

🌿 PROTOCOLO NATURAL:
- Hortelã
- Gengibre
- Erva-doce

🍵 RECEITA:
Chá digestivo:
- 1 pedaço de gengibre
- 1 colher de hortelã
Ferver por 10 min

⚠️ CONTRAINDICAÇÕES:
- Gengibre em excesso pode irritar o estômago

💡 DICA EXTRA:
Evitar comer rápido
`
  }

  else if (q.includes("imunidade")) {
    resposta = `
🧠 POSSÍVEIS CAUSAS:
- Baixa ingestão de vitaminas
- Estresse
- Falta de sono

🌿 PROTOCOLO NATURAL:
- Alho
- Gengibre
- Cúrcuma
- Limão

🍵 RECEITA:
Shot matinal:
- Suco de 1 limão
- 1 colher de cúrcuma
- 1 pitada de pimenta preta

⚠️ CONTRAINDICAÇÕES:
- Problemas gástricos devem evitar excesso de cúrcuma

💡 DICA EXTRA:
Tomar sol diariamente
`
  }

  else {
    resposta = `
🔎 Buscando recomendação para: "${query}"

🌿 Sugestão geral:
- Melhorar alimentação
- Reduzir industrializados
- Usar ervas naturais conforme sintomas

💡 Em breve respostas mais específicas
`
  }

  res.status(200).json({ resposta })
}
