function superPrompt(){
    let sms;

    let text = prompt("¿Como te llamas?")

    if (text == null || text == "") {
        sms = "No me has dicho como te llamas";   
    } else {
    sms = "Hola " + text;}

    document.getElementById("ejemplo").innerHTML = "Hola " + text;
}