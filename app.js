
// const {fizzbuzz} = require('./fizzbuzz')

// fizzbuzz()

const express = require('express')
const app = express()

const port = 3000;

app.use(express.static(`${__dirname}/public`))

app.get('/ola', (req , res) => {
  res.send("ola mundo")
})

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

// const http = require("http");
// const fs = require("fs").promises;

// const hostname = "localhost";
// const port = 3000;

// const server = http.createServer();

// function trataReq(req, res) {
//   if (req.url === "/fizzbuzz") {
//     for (let i = 1; i < 20; i++) {
//       const mensagem = fizzbuzz(i);
//       res.write(mensagem);
//     }
//     res.end();
//   } else {
//     fs.readFile("./index.html", "utf-8").then((texto) => {
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/plain");
//       res.write(texto);
//       res.end();
//     });
//   }
// }

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
