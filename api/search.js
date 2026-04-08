export default async function handler(request) {
  try {
    return new Response(
      JSON.stringify({ funcionando: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ erro: err.message }),
      { status: 500 }
    );
  }
}
