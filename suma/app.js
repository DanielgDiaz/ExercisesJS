function sumaPrompt(){
    let suma;

    let a = prompt("Escribe un numero")

    let b = prompt("Escribe otro numero")

    suma = a + b ;

    document.getElementById("resultado").innerHTML = a + b;
}