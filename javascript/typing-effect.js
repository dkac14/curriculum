const nombre = "Hola, soy Dome 👋";
let i = 0;

function effect(){
    if(i < nombre.length){
        document.getElementById("greeting").textContent += nombre.charAt(i);
        i++
        setTimeout(effect, 100);

    }
}

effect();