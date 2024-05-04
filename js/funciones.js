// --------------MENU DESPLEGABLE---------------
document.addEventListener('DOMContentLoaded', function() {
    const navegacion = document.querySelector("nav");
    const botones = document.querySelectorAll(".abrir, .cerrar");

    botones.forEach( boton => {
        boton.addEventListener("click", () => {
            navegacion.classList.toggle("desplegado");
        });
    });
});

// --------SLIDER -----------
document.addEventListener('DOMContentLoaded', function() {
    let contador = 0;
    carrousel();

    // Funcion para que cambie de imagen cambiando la clase display
    function carrousel() {
        let slides = document.querySelectorAll(".slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        contador++;
        if (contador > slides.length) {contador = 1}    
        slides[contador-1].style.display = "block";  
        setTimeout(carrousel, 3000); 
    }
});

// -------------ACORDEON-------------
document.addEventListener('DOMContentLoaded', function(){
    const botones = document.querySelectorAll(".boton");
    
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            // Encuentra el elemento hermano 'oculto' del botón actual
            const contenido = boton.nextElementSibling;

            contenido.classList.toggle("mostrar");
        });
    });
});



