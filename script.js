let matematicaInput = document.getElementById("mat");
matematicaInput.addEventListener("input", function () {
  matematicaInput.style.color = "#fff";
});

let humanasInput = document.getElementById("human");
humanasInput.addEventListener("input", function () {
  humanasInput.style.color = "#fff";
});

let naturezaInput = document.getElementById("natureza");
naturezaInput.addEventListener("input", function () {
  naturezaInput.style.color = "#fff";
});

let linguagemInput = document.getElementById("language");
linguagemInput.addEventListener("input", function () {
  linguagemInput.style.color = "#fff";
});

let redacaoInput = document.getElementById("redacao");
redacaoInput.addEventListener("input", function () {
  redacaoInput.style.color = "#fff";
});

function exibirMedia() {
  let matematica = parseFloat(document.getElementById("mat").value);
  let humanas = parseFloat(document.getElementById("human").value);
  let linguagens = parseFloat(document.getElementById("language").value);
  let natureza = parseFloat(document.getElementById("natureza").value);
  let redacao = parseFloat(document.getElementById("redacao").value);

  let soma = (matematica + humanas + linguagens + natureza + redacao) / 5;
  let media = document.getElementById("resultadoNota");

  if (
    isNaN(matematica) ||
    isNaN(humanas) ||
    isNaN(linguagens) ||
    isNaN(natureza) ||
    isNaN(redacao)
  ) {
    return alert("Escreva notas válidas!");
  }

  media.textContent = soma;

  let pageResultado = document.getElementById("pageResultado");
  pageResultado.style.opacity = "1";
  pageResultado.style.transition = " opacity 0.6s ease";
  pageResultado.style.visibility = "visible";

  let pageNota = document.getElementById("pageNota");
  pageNota.style.opacity = "0.2";
  pageNota.style.transition = "opacity 0.7s ease";

  // Iniciar transição no body
  document.body.style.backgroundColor = "#21394E";
  document.body.style.transition = "background-color 0.7s ease";
}

function fecharPage() {
  let pageFecharResultado = document.getElementById("pageResultado");
  pageFecharResultado.style.opacity = "0";
  pageFecharResultado.style.visibility = "hidden";

  let pageNota = document.getElementById("pageNota");
  pageNota.style.opacity = "1";

  document.body.style.backgroundColor = "#fff";

}

