export default async function handler(req, res) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();

    return res.status(200).json({
      etapa: "PASSO 2 OK",
      data: data
    });

  } catch (error) {
    return res.status(500).json({
      erro: error.message
    });
  }
}
