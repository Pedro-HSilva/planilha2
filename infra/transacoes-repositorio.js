const transacoes = {
  transacoes: []
};

class TransacoesRepositorio {
  listarTransacoes() {
    return transacoes;
  }

  criarTransacao(transacao) {
    const lista = transacoes.transacoes;
    lista.push(transacao);
    // return transacoes;
  }
}

module.exports = TransacoesRepositorio;
