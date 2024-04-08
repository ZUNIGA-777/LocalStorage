window.onload = iniciar;

function iniciar(){
    let boton = document.querySelector("#btn");
    boton.addEventListener("click", saveLocalStorage);
    mostrarNotas()
}

function saveLocalStorage(){
    let input = document.querySelector("#textoEntrada");

    if(localStorage.getItem("notas")){
        let notas = localStorage.getItem("notas");
        notas += " " + input.value;
        localStorage.setItem("notas", notas);
    } else {
        localStorage.setItem("notas", input.value);
    }
    mostrarNotas()
}

function mostrarNotas(){
    let containerNotas = document.querySelector("#containerNotas");
    containerNotas.innerHTML = localStorage.getItem("notas") || "";
}
