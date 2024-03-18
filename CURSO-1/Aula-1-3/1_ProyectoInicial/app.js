alert('Bienvenido al juego del número secreto');

/* Variables */
let numeroSecretoMaximo = 20;
let intentosMaximos = 5;
let intentos = 1;
let numeroUsuario = 0;
let numeroSecreto = parseInt(Math.random() * numeroSecretoMaximo) + 1;

while (numeroUsuario != numeroSecreto) {
    console.log('Valor del número secreto:', numeroSecreto);
    // Agrega un console.log para verificar el valor de "numeroUsuario" después de la entrada del usuario
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroSecretoMaximo} por favor:`));
    console.log('Valor de intento:', numeroUsuario);

    // Agrega un console.log para verificar la comparación entre "numeroUsuario" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    /* Este código realiza la comparación */
    if (numeroUsuario == numeroSecreto) {
        /* Acertamos, fue verdadera la condición */
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        /* Incrementamos el operador cuando la persona no acierta */
        intentos++;

        if (intentos > intentosMaximos) {
            alert(`Llegaste al número máximo de ${intentosMaximos} intentos. El número secreto era el ${numeroSecreto}`);
            break;
        }
    }
}
