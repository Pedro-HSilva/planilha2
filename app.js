
// const {fizzbuzz} = require('./fizzbuzz')

// fizzbuzz()

const express = require('express')
const TransacoesRepositorio = require("./transacoes-repositorio")

const app = express()
const port = 3000;

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', (req , res) => {
  const repositorio = new TransacoesRepositorio
  const transacoes = repositorio.listarTransacoes()

  res.send(transacoes)

})

app.post('/transacoes', (req, res) => {
  const repositorio = new TransacoesRepositorio()
  const transacao = req.body
  repositorio.criarTransacao(transacao)
  res.status(201).send(transacao)
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
