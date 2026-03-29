// Función para generar elementos de confeti
function crearConfeti() {
    const contenedor = document.getElementById('contenedor-confeti');
    const cantidad = 80; // Aumentado para mayor efecto

    // Limpiar confeti anterior si existe
    contenedor.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti');
        
        // Posición horizontal aleatoria en toda la pantalla
        confeti.style.left = `${Math.random() * 100}vw`;
        // Tamaño aleatorio entre 5px y 15px
        const tamano = Math.random() * 10 + 5;
        confeti.style.width = `${tamano}px`;
        confeti.style.height = `${tamano}px`;
        // Retraso aleatorio para que no caigan todos juntos
        confeti.style.animationDelay = `${Math.random() * 6}s`;
        // Velocidad aleatoria de caída
        confeti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        
        contenedor.appendChild(confeti);
    }

    // Repetir la creación de confeti cada 7 segundos
    setTimeout(crearConfeti, 7000);
}

// Control de reproducción de música
document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que todos los elementos estén cargados
    const btnMusica = document.getElementById('btnMusica');
    const musicaCumple = document.getElementById('musicaCumple');

    if (btnMusica && musicaCumple) {
        btnMusica.addEventListener('click', function() {
            if (musicaCumple.paused) {
                // Intentar reproducir (algunos navegadores requieren interacción del usuario)
                musicaCumple.play().catch(function(error) {
                    alert("No se pudo reproducir la música. Asegúrate de habilitar el sonido en tu navegador.");
                });
                btnMusica.textContent = "🎵 Pausar música";
            } else {
                musicaCumple.pause();
                btnMusica.textContent = "🎵 Reproducir música de cumpleaños";
            }
        });
    }

    // Iniciar la creación de confeti
    crearConfeti();
});