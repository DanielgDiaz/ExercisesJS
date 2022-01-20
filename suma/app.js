function sumaPrompt(){
    let suma;

    let a = parseInt(prompt("Escribe un numero"))

    let b = parseInt(prompt("Escribe otro numero"))

    suma = a + b ;

    document.getElementById("resultado").innerHTML = a + b;
}