
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