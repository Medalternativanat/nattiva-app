export default async function handler(req, res) {
  const query = req.query.q;

  res.status(200).json({
    funcionando: true,
    query_recebida: query
  });
}
