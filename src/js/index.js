/*

objetivo 1:QUANDO  O USUARIO  CLICAR NA SETA AVANÇAR  IR PARA A PROXIMA CARTA ...

    passo 1:pegar o elemento html da seta avançar 

    passo 2:dar um jeito de intentificar quando o usuario clica nela

    passo3:mudar para a proxima carta da lista

    passo4:esconder a carta que estva selecionada


objetivo 2:QUANDO  O USUARIO  CLICAR NA SETA AVANÇAR  IR PARA A carta  anterior ...

    passo 1:pegar o elemento html da seta voltar

    passo 2:dar um jeito de intentificar quando o usuario clica nela

    passo3:mudar para a proxima carta anterior da lista

    passo4:esconder a carta que estva selecionada
*/

/*passo 1:pegar o elemento html da seta avançar */

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function mostrarCartaoSelecionada() {
  cartoes[cartaoAtual].classList.add("selecionada");
}

function esconderCartaoSelecionada() {
  const cartaoSelecionado = document.querySelector(".selecionada");
  cartaoSelecionado.classList.remove("selecionada");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    return;
  }

  esconderCartaoSelecionada();
  cartaoAtual++;
  mostrarCartaoSelecionada();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual < 1) {
    return;
  }

  esconderCartaoSelecionada();
  cartaoAtual--;
  mostrarCartaoSelecionada();
});
