function mayorMenor(){
    let result;

    let a = parseInt(prompt("Escribe un numero"))

    let b = parseInt(prompt("Escribe otro numero"))

    result = Math.max(a, b)

    document.getElementById("resultado").innerHTML = result;
}