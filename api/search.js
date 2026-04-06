export default async function handler(req, res) {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query vazia" });
  }

  let resposta = "";

  if (query.toLowerCase().includes("ansiedade")) {
    resposta = "Sugestão: camomila, valeriana e lavanda ajudam na ansiedade.";
  } 
  else if (query.toLowerCase().includes("gases")) {
    resposta = "Sugestão: chá de hortelã e gengibre ajudam nos gases.";
  } 
  else if (query.toLowerCase().includes("imunidade")) {
    resposta = "Sugestão: alho, gengibre e cúrcuma fortalecem a imunidade.";
  } 
  else {
    resposta = "Buscando recomendação natural para: " + query;
  }

  res.status(200).json({ resposta });
}
