let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto')
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}



function gerarNumeroAleatorio() {

 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
 if (quantidadeDeElementosNaLista == numeroLimite) {
  listaNumerosSorteados = [];
 }
 if (listaNumerosSorteados.includes(numeroEscolhido)) {
  return gerarNumeroAleatorio();
 }  else {
  listaNumerosSorteados.push(numeroEscolhido);
  return numeroEscolhido;
 }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = ''; 
}

function verificarChute() {
  let chute = parseInt(document.querySelector('input').value);
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = 'Você acertou o número secreto ' + ' em ' + tentativas + ' ' + palavraTentativa;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('chutar').setAttribute('disabled', 'true'); 
} else if (chute > numeroSecreto) {
    exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
} else{
    exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
  }
  tentativas ++;
  limparCampo();
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
  document.getElementById('chutar').removeAttribute('disabled');
  exibirMensagemInicial();
}
