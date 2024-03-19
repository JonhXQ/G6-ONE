let NumeroSecreto = GenerarNumeroSecreto();

let Intentos = 1;

function AsignarTextoElemento(elemento, texto) {
  let ElementoHTML = document.querySelector(elemento);
  ElementoHTML.innerHTML = texto;
  return;
}

function VerificarIntento() {
  let NumeroDelUsuario = parseInt(document.getElementById('ValorUsuario').value);
  if (NumeroSecreto == NumeroDelUsuario) {
    AsignarTextoElemento('p', `Acertaste el número en ${Intentos} ${(Intentos === 1) ?'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
  else {
    if (NumeroDelUsuario > NumeroSecreto) {
      AsignarTextoElemento('p', 'El número secreto es menor');
    }
    else {
      AsignarTextoElemento('p', 'El número secreto es mayor');
    }
    Intentos++;
    LimpiarCaja();
  }

  return;
}

function LimpiarCaja() {
  document.querySelector('#ValorUsuario').value = '';
}

function GenerarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function CondicionesIniciales() {
  /* Reiniciar mensajes Iniciales */
  AsignarTextoElemento('h1', '¡Número Secreto!');
  AsignarTextoElemento('p', 'Indica un número del 1 al 10');
  /* Generar el número aleatorio */
  NumeroSecreto = GenerarNumeroSecreto();
  /* Reiniciar número de intentos */
  Intentos = 1;
}

function ReiniciarJuego() {
  /* Limpiar la caja */
  LimpiarCaja()
  /* Reiniciar condiciones iniciales */
  CondicionesIniciales();
  /* Deshabilitar el botón de nuevo juego */
  document.getElementById('reiniciar').setAttribute('disabled','true')
}

CondicionesIniciales();