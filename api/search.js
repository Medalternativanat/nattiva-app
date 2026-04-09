export default async function handler(req, res) {
  try {
    throw new Error("DEBUG_FORCADO");
  } catch (err) {
    return res.status(200).json({
      erro: err.message,
      stack: err.stack
    });
  }
}
