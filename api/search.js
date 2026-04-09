export default async function handler(req, res) {
  return res.status(200).json({
    apiKeyExiste: !!process.env.OPENAI_API_KEY
  });
}
