let NumeroSecreto = GenerarNumeroSecreto();

function AsignarTextoElemento(elemento, texto) {
  let ElementoHTML = document.querySelector(elemento);
  ElementoHTML.innerHTML = texto;
  return;
}

function VerificarIntento() {
  let NumeroDelUsuario = parseInt(document.getElementById('ValorUsuario').value);
  console.log(typeof(NumeroSecreto));
  console.log(NumeroSecreto);
  console.log(typeof(NumeroDelUsuario));
  console.log(NumeroDelUsuario);
  console.log(NumeroSecreto === NumeroDelUsuario);
  return;
}

function GenerarNumeroSecreto() {
  return Math.floor(Math.random()*10)+1;
}

AsignarTextoElemento('h1','¡Juego del Número Secreto!');

AsignarTextoElemento('p','Indica un número del 1 al 10');