const input = document.querySelector("#textoEntrada")
const botonSaveLocalStorage = document.querySelector("#btn")

botonSaveLocalStorage.addEventListener("click",()=>{
    if(localStorage.getItem("nombres")){
        var nombres = localStorage.getItem("nombres")
        nombres += " " + input.value
        localStorage.setItem("nombres", nombres)
    } else {
        localStorage.setItem("nombres", input.value)
    }
})