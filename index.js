
/* let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"))


if (numero == 0 ) {
    console.log("Por favor, ingrese un número válido.")
} else {
    console.log("Tabla de multiplicar del " + numero + ":")
    
    let i = 1;
    while (i <= 10) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado)
        i++
    }
}
 */



/* let suma = 0
let numero

do {
    numero = parseInt(prompt("Ingrese un número (o 0 para terminar):"))
    
    if (numero == 0) {
        console.log("Por favor, ingrese un número válido.");
    } else {

        if (numero !== 0) {
            suma += numero;
            console.log("Número ingresado: " + numero);
            console.log("Suma actual: " + suma);
        }
    }
} while (numero !== 0);


console.log("Suma total: " + suma);
console.log("Programa terminado."); */




let numeroSecreto = Math.floor(Math.random() * 100) + 1

let intentos = 0;
let numeroUsuario;

do {
    // Solicitar al usuario que ingrese un número
    numeroUsuario = prompt("Adivina el número secreto (entre 1 y 100):")
    // Convertir la entrada a número
    numeroUsuario = Number(numeroUsuario)
    
    // Verificar si el número es válido
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        console.log("Por favor, ingrese un número válido entre 1 y 100.")
    } else {
        intentos++;
        
        if (numeroUsuario < numeroSecreto) {
            console.log("El número secreto es mayor. Intenta de nuevo.")
        } else if (numeroUsuario > numeroSecreto) {
            console.log("El número secreto es menor. Intenta de nuevo.")
        } else {
            console.log("¡Felicitaciones! ¡Has adivinado el número secreto!")
            console.log("Lo has logrado en " + intentos + " intentos.")
        }
    }
} while (numeroUsuario !== numeroSecreto);