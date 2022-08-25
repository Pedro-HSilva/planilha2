
function despesaUsuario() {
  let descricaoDespesa = prompt('Qual a descricao de sua despesa?')
  let valorDespesa = prompt('Qual o valor de sua despesa?')

  const valor = Number(valorDespesa)

  if (isNaN(valor)) {
      return alert('Este campo deve ser preenchido com um valor numérico')
      
    }

  const despesa = {
      descricao: descricaoDespesa,
      valor: valor,
      categoria: "Despesa"
  }
  exibirSaldo()
  enviaDados(despesa)
  getTransacoes()
}



function receitaUsuario() {
  let descricaoReceita = prompt('Qual a descricao de sua receita?')
  let valorReceita = parseInt(prompt('Qual o valor de sua receita?'))

  const valor = Number(valorReceita)

  if (isNaN(valor)) {
      return alert('Este campo deve ser preenchido com um valor numérico')
    }


  const receita = {
      descricao: descricaoReceita,
      valor: valor,
      categoria: "Receita"
  }
  exibirSaldo()
  enviaDados(receita)
  getTransacoes()
}

function formatarValor(valor) {
return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}


function exibirSaldo(saldo) {
document.getElementById('saldo').innerHTML = `Saldo: R$ ${saldo}`
}


function adicionaTabela(transacoes) {
let tabela = '';

transacoes.reverse().forEach(transacao => {
  let colunaDescricao = `<td class="coluna-descricao">${transacao.descricao}</td>`
  let colunaCategoria =  `<td class="coluna-categoria">${transacao.categoria}</td>`
  let colunaValor = `<td class="coluna-valor">${transacao.valor}</td>`
  let linha = `<tr>${colunaDescricao}${colunaCategoria}${colunaValor}</tr>`
  tabela += linha
});
document.getElementById('lista-transacoes-conteudo').innerHTML = tabela;
}

document.getElementById("botao-despesa").addEventListener('click',despesaUsuario)
document.getElementById("botao-receita").addEventListener('click',receitaUsuario)


async function getTransacoes() {
const url = `/transacoes`;

const respostaFetch = await fetch(url);
const financas = await respostaFetch.json()

exibirSaldo(financas.saldo)
adicionaTabela(financas.transacoes)
}

async function enviaDados(transacao) {
  const url = `/transacoes`;

  const requisicao =  { method: 'POST', body: JSON.stringify(transacao), Headers: {
    "content-type": "application/json"
  }}
  await fetch(url, requisicao)
}

getTransacoes()

    
  
    
    
