  
const miIframe = document.getElementById ('display_iframe');
const displayValorAnterior = document.getElementById('display_child_anterior_id');
const displayValorActual = document.getElementById('display_child_actual_id');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});