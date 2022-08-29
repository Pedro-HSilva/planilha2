function despesaUsuario() {
  const descricaoDespesa = prompt("Qual a descricao de sua despesa?");
  const valorDespesa = prompt("Qual o valor de sua despesa?");

  if (valorDespesa.indexOf(",") > 0) {
    alert(
      "Você deve digitar números com o símbolo decimal ponto, e não vírgula"
    );
    return;
  }

  if (isNaN(valorDespesa)) {
    return alert("Este campo deve ser preenchido com um valor numérico");
  }

  const valor = Number(valorDespesa);

  const despesa = {
    descricao: descricaoDespesa,
    valor: valor,
    categoria: "Despesa",
  };
  // exibirSaldo();
  enviaDados(despesa);
  getTransacoes();
}

function receitaUsuario() {
  const descricaoReceita = prompt("Qual a descricao de sua receita?");
  const valorReceita = prompt("Qual o valor de sua receita?");

  if (valorReceita.indexOf(",") > 0) {
    alert(
      "Você deve digitar números com o símbolo decimal ponto, e não vírgula"
    );
    return;
  }

  if (isNaN(valorReceita)) {
    return alert("Este campo deve ser preenchido com um valor numérico");
  }

  const valor = Number(valorReceita);

  const receita = {
    descricao: descricaoReceita,
    valor: valor,
    categoria: "Receita",
  };
  // exibirSaldo();
  enviaDados(receita);
  getTransacoes();
}

function formatarValor(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function exibirSaldo(saldo) {
  document.getElementById("saldo").innerHTML = `Saldo: R$ ${saldo}`;
}

function adicionaTabela(transacoes) {
  let tabela = "";

  transacoes.reverse().forEach((transacao) => {
    let colunaDescricao = `<td class="coluna-descricao">${transacao.descricao}</td>`;
    let colunaCategoria = `<td class="coluna-categoria">${transacao.categoria}</td>`;
    let colunaValor = `<td class="coluna-valor">${formatarValor(
      transacao.valor
    )}</td>`;
    let linha = `<tr>${colunaDescricao}${colunaCategoria}${colunaValor}</tr>`;
    tabela += linha;
  });
  document.getElementById("lista-transacoes-conteudo").innerHTML = tabela;
}

document
  .getElementById("botao-despesa")
  .addEventListener("click", despesaUsuario);
document
  .getElementById("botao-receita")
  .addEventListener("click", receitaUsuario);

async function getTransacoes() {
  const url = `/transacoes`;

  const respostaFetch = await fetch(url);
  const financas = await respostaFetch.json();

  exibirSaldo(financas.saldo);
  adicionaTabela(financas.transacoes);
  console.log(financas);
}
getTransacoes();

async function enviaDados(transacao) {
  const url = `/transacoes`;

  const requisicao = {
    method: "POST",
    body: JSON.stringify(transacao),
    headers: {
      "content-type": "application/json",
    },
  };
  await fetch(url, requisicao);
}
