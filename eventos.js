
const button = document.querySelector('.boton-contenedor button');

button.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Se clickeó el botón y este es el segundo manejador');
});

const divBotonContenedor = document.querySelector('.boton-contenedor');

divBotonContenedor.addEventListener('click', function() {
    alert('Hola! Soy el div');
});




