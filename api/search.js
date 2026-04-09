export default async function handler(req, res) {
  return res.status(200).json({
    status: "FUNCIONANDO",
    query: req.query.q || null
  });
}
