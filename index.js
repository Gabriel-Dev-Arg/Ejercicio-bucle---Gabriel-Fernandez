
/* ejercicio 1 */

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

/* ejercicio 2 */

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


/* ejercicio 3 */

/* let numeroSecreto = 100

let intentos = 0;
let numeroUsuario;

do {
    
    numeroUsuario = prompt("Adivina el número secreto (entre 1 y 100):")

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        alert("Por favor, ingrese un número válido entre 1 y 100.")
    } else {
        intentos++
        
        if (numeroUsuario < numeroSecreto) {
            alert("El número secreto es menor. Intenta de nuevo.")
        } else if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es mayor. Intenta de nuevo.")
        } else {
            alert("¡Felicitaciones! ¡Has adivinado el número secreto!")
            alert("Lo has logrado en " + intentos + " intentos.")
        }
    }
} while (numeroUsuario !== numeroSecreto)   */



/* ejercicio 4 */

/* function esPrimo(numero){
    if (numero <= 1 ){
        return false
    }
    for (let i = 2; i <= numero / 2; i++){
        if (numero % i === 0){
        return false
        }
    }
    return true
}

let numero = parseInt(prompt(" Ingrese un numero para verificar si es primo: "))

if (numero){
    console.log(" Por favor, ingrese un numero valido.")
}else{
    if (esPrimo(numero)){
        console.log(numero + " es un numero primo.")
    }else{
        console.log(numero + " no es un numero primo.")
    }
} */


/* Ejercicio 5 */


/* let numero = parseInt(prompt(" da un numero para que te mostremos el divisor del mismo "))

function mostrarDivisores(numero) {
    if (isNaN(numero) || numero <= 0){
        console.log("No es valido tu numero, Por favor, introduce un numero positivo. ");
    }
    console.log(" Los divisores de " + numero +" son:");

    for (let i = 1; i <= numero; i++){
        if (numero % i === 0){
            console.log(i)
        }
    }
}
mostrarDivisores(numero)
mostrarDivisores(2) */


/* ejercicio 6 */

/* let futbol = [" Dibu"," Martinez"," Cuti"," Molina"," Huevo Acuña"," Paredes"," Enzo Fernandez"," Maccalister"," ElMejorDeLaHistoriaMessi"," Julian y Lautaro"," Fideo Dimaria"]

function mostrarElementos(array){
    let contador = 0
        for (let element of array) {
        console.log("Elemento " + contador + element )
        contador++
    }
}

mostrarElementos(futbol)

 */

/* ejercicio 7 */

/* let numero = [1000, 2000, 3000 , 40000, 500000, 60000, 70000, 800000, 900000000, 10000000000 ]

function mostrarNumeros (array){
    let contador = 0
    for (const element of array) {
        console.log("numero "+ contador + element)
        contador++
        
    }
}

mostrarNumeros(numero) */

/* ejercicio 8 */

/* const Grupofamiliar = [
   {
    nombre : "Gabriel",
    apellido: "Fernandez",
    edad: 27,
    tieneMascotas: true,
    nacionalidad: "Arg"
   },
   {
    nombre : "Thomas",
    apellido: "Fernandez",
    edad: 25,
    tieneMascotas: true,
    nacionalidad: "Arg"
   },
   {
    nombre : "Solange",
    apellido: "calivar",
    edad: 22,
    tieneMascotas: true,
    nacionalidad: "Arg"
   },
   {
    nombre : "Morena",
    apellido: "Calivar",
    edad: 17,
    tieneMascotas: false,
    nacionalidad: "Arg"
   },
   {
    nombre : "Alan",
    apellido: "Gomez",
    edad: 29,
    tieneMascotas: undefined,
    nacionalidad: "Arg"
   }
]
console.log(Grupofamiliar[0].nombre)

function mostrarArray(array){
       for (const familia of array) {
        console.log(`Nombre: ${familia.nombre}, Apellido: ${familia.apellido}, Edad: ${familia.edad},TieneMascota?: ${familia.tieneMascotas}`);
       }
    }
mostrarArray(Grupofamiliar) */


/* ejercicio 9 */

/* let MostrarNumImpar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numerosImpar (array)
{
    console.log("Numeros impares en el array:" )
    array.forEach(numero => {
        if (numero % 2 !== 0){
            console.log(numero)
        }
    });
    
}

numerosImpar(MostrarNumImpar) */

/* ejercicio 10 */

/* function calcularSumas() {
    let sumaPares = 0
    let sumaImpares = 0
    
    while (true) {
        let numero = parseInt(prompt("Ingrese un numero (0 para terminar):"))
        if (isNaN(numero)) {
            console.log("Por favor, ingrese un numero valido.")
            continue
        }

        if (numero === 0) {
            break
        }

        if (numero % 2 === 0) {
            sumaPares += numero
        } else {
            sumaImpares += numero
        }
    }

    console.log("Suma de numeros pares: " + sumaPares);
    console.log("Suma de numeros impares: " + sumaImpares)
}


calcularSumas(); */


/* ejercicio 11 */

/* let numeros = [10,20,30,40,50,60,70,80,90,100]

function numeroMasGrande(numeros) {
    if(numeros.length === 0){
        console.log("El array esta vacio")
        return
    }
    let mayor = numeros[0]

    for (const numero of numeros) {
        if (numero > mayor) {
            mayor = numero
        }
    }
    console.log("El numero mas grande es: " + mayor)
}
numeroMasGrande(numeros) */


/* ejercicio 12 */

/* let numeros = [10,20,30,40,50,60,70,80,90,100]

function numeroMasChico(numeros){
    if(numeros.length === 0){
        console.log("El array esta vacio");
        return
    }
    let menor = numeros [0]

    for (const numero of numeros) {
        if(numero < menor){
            menor = numero
        }
    }
    console.log("El numero mas chico es: " +menor)
}
numeroMasChico(numeros) */

/* Ejercicio 13 */

/* function jugarPiedraPapelTijeras() {
    const jugador1 = prompt("Ingrese el nombre del primer jugador:");
    const jugador2 = prompt("Ingrese el nombre del segundo jugador:");

    let ganador = null;

    while (!ganador) {
        
        const jugada1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`).toLowerCase();
        const jugada2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`).toLowerCase();

        if (!['piedra', 'papel', 'tijeras'].includes(jugada1) || !['piedra', 'papel', 'tijeras'].includes(jugada2)) {
            console.log("Jugada inválida. Por favor, elijan entre piedra, papel o tijeras.");
            continue;
        }

        if (jugada1 === jugada2) {
            console.log("Empate. Jugamos de nuevo.");
        } else if (
            (jugada1 === 'piedra' && jugada2 === 'tijeras') ||
            (jugada1 === 'papel' && jugada2 === 'piedra') ||
            (jugada1 === 'tijeras' && jugada2 === 'papel')
        ) {
            ganador = jugador1;
        } else {
            ganador = jugador2;
        }
    }

    console.log(`¡${ganador} ha ganado el juego!`);
}

jugarPiedraPapelTijeras(); */

/* ejercicio 14 */
/* function imprimirTriangulo(lado) {
    for (let i = 1; i <= lado; i++) {
        let linea = ''
        for (let j = 1; j <= i; j++) {
            linea += '*'
        }
        console.log(linea)
    }
}


imprimirTriangulo(5); */


/* ejercicio 15 */
/* function imprimirTrianguloInvertido(lado) {
    for (let i = lado; i >= 1; i--) {
        let linea = ''
        for (let j = 1; j <= i; j++) {
            linea += '*'
        }
        console.log(linea)
    }
}


imprimirTrianguloInvertido(5); */


/* ejercicio 16 */
/* function ordenarArray(arr) {
    const n = arr.length
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    
    return arr
}


const numeros = [64, 34, 25, 12, 22, 11, 90, 88, 45, 73];

console.log("Array original:", numeros)

const arrayOrdenado = ordenarArray(numeros)

console.log("Array ordenado:", arrayOrdenado) */