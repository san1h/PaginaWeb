document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorBtn'); // Obtenemos el botón

    // Función para cambiar el color de fondo
    button.addEventListener('click', function() {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
    });
});