import http from "http";
import https from "https";

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    const options = {
      hostname: "api.openai.com",
      path: "/v1/models",
      method: "GET",
      headers: {
        Authorization: Bearer ${process.env.OPENAI_API_KEY},
      },
    };

    const request = https.request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "OK", data }));
      });
    });

    request.on("error", (error) => {
      res.writeHead(500);
      res.end(JSON.stringify({ erro: error.message }));
    });

    request.end();
  } else {
    res.writeHead(200);
    res.end("Servidor rodando 🚀");
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
