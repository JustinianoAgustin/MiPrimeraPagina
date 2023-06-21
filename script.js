function showAlert(){
    alert("Esta es una alerta papa Gomez");
}

const miBoton = document.getElementById("boton");

function hacerClick(){
    alert("Hiciste click");
}

miBoton.addEventListener("click", hacerClick);

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})