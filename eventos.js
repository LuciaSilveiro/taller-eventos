
const button = document.querySelector('.boton-contenedor button');


button.addEventListener('click', function() {
    console.log('Se clickeó el botón y este es el segundo manejador');
});

const divBotonContenedor = document.querySelector('.boton-contenedor');

divBotonContenedor.addEventListener('click', function() {
    alert('Hola! Soy el div');
});
