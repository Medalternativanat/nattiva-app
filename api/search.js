export default function handler(req, res) {
  return res.status(200).json({
    funcionando: true,
    query: req.query.q
  });
}
