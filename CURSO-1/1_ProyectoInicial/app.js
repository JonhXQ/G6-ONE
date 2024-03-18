alert('Bienvenido al juego del número secreto');

/* Variables */
let numeroSecreto = 2;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntentos = 'vez';

while (numeroUsuario != numeroSecreto) {
    // Agrega un console.log para verificar el valor de "numeroUsuario" después de la entrada del usuario
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
    console.log('Valor de intento:', numeroUsuario);

    // Agrega un console.log para verificar la comparación entre "numeroUsuario" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    /* Este código realiza la comparación */
    if (numeroUsuario == numeroSecreto) {
        /* Acertamos, fue verdadera la condición */
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraIntentos}`);

        // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
        console.log('Valor del número secreto:', numeroSecreto);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        /* Incrementamos el operador cuando la persona no acierta */
        intentos += 1;
        palabraIntentos = 'veces';
    }
}
