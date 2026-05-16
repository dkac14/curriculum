const nombre = "Domenica Katherine Amores Cedeño";
let i = 0;

function effect(){
    if(i < nombre.length){
        document.getElementById("nombre").textContent += nombre.charAt(i);
        i++
        setTimeout(effect, 100);

    }
}

effect();