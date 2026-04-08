export default async function handler(req, res) {
  try {
    return res.status(200).json({
      funcionando: true
    });
  } catch (err) {
    return res.status(500).json({
      erro: err.message
    });
  }
}
