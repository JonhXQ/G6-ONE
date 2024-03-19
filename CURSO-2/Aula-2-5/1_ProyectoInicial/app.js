let NumeroSecreto = 0;
let Intentos = 0;
let NumerosSorteados = [];
let NumeroMaximo = 10;

function AsignarTextoElemento(elemento, texto) {
  let ElementoHTML = document.querySelector(elemento);
  ElementoHTML.innerHTML = texto;
  return;
}

function VerificarIntento() {
  let NumeroDelUsuario = parseInt(document.getElementById('ValorUsuario').value);
  if (NumeroSecreto == NumeroDelUsuario) {
    AsignarTextoElemento('p', `Acertaste el número en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}`);
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
  let NumeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;
  console.log(NumeroGenerado);
  console.log(NumerosSorteados);
  /* Verificamos si ya sorteamos todos los números  */
  if (NumerosSorteados.length == NumeroMaximo) {
    AsignarTextoElemento('p', 'Se sortearon los números disponibles');
  }
  else if (NumerosSorteados.includes(NumeroGenerado)) {
    return GenerarNumeroSecreto();
  } else {
    NumerosSorteados.push(NumeroGenerado);
    return NumeroGenerado;
  }
}

function CondicionesIniciales() {
  /* Reiniciar mensajes Iniciales */
  AsignarTextoElemento('h1', '¡Número Secreto!');
  AsignarTextoElemento('p', `Indica un número del 1 al ${NumeroMaximo}`);
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
  document.getElementById('reiniciar').setAttribute('disabled', 'true')
}

CondicionesIniciales();