alert('Bienvenido al juego del número secreto');

/* Variables */
// Agrega un console.log para verificar el valor de "numeroUsuario" después de la entrada del usuario
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
console.log('Valor de intento:', intento);

let numeroSecreto = 2;

// Agrega un console.log para verificar la comparación entre "numeroUsuario" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

/* Este código realiza la comparación */
if (numeroUsuario == numeroSecreto) {
    /* Acertamos, fue verdadera la condición */
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    /* La condición no se cumplió */
    alert('Lo siento, no acertaste el número');
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
}